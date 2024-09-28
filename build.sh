#!/bin/bash

# 设置 GitLab 仓库的 URL 和本地的存储路径
QIANKUN_PARENT_URL="https://github.com/13523010484/qiankun-parent.git"
QIANKUN_CHILDREN_URL="https://github.com/13523010484/qiankun-children.git"
LOCAL_PATH_PARENT="/Users/jqh/Desktop/jqh/code/shell/qiankun-parent"
LOCAL_PATH_CHILDREN="$LOCAL_PATH_PARENT/qiankun-children"
BRANCH_NAME="main"  # 指定分支名称
TARGET_DIR_PARENT="/Users/jqh/Desktop/jqh/code/shell/shch_web"
TARGET_DIR_CHILDREN="$TARGET_DIR_PARENT/front-web"

# 获取当前时间作为时间戳
TIMESTAMP=$(date +%Y%m%d%H%M%S)

# 确保目标目录存在
ensure_target_directory_exists() {
    local TARGET_DIR=$1
    mkdir -p "$TARGET_DIR"
}

# 处理单个仓库
handle_repository() {
    local GITLAB_URL=$1
    local LOCAL_PATH=$2
    local BRANCH_NAME=$3
    local TARGET_DIR=$4
    local TIMESTAMP=$5

    # 检查本地仓库是否存在
    if [ -d "$LOCAL_PATH" ]; then
        # 如果本地仓库存在，则进入该目录并检查是否为 Git 仓库
        cd "$LOCAL_PATH"
        
        # 检查当前目录是否为 Git 仓库
        if [ -d .git ]; then
            echo "Update existing repository '$LOCAL_PATH'..."
            git fetch origin  # 先 fetch 最新的远程分支信息
            
            # 检查远程分支是否存在
            if git rev-parse --verify "origin/$BRANCH_NAME" >/dev/null 2>&1; then
                git checkout "$BRANCH_NAME"  # 切换到指定分支
                git pull origin "$BRANCH_NAME" || {
                    echo "Error: Failed to pull from origin $BRANCH_NAME."
                    exit 1
                }
            else
                echo "Error: Remote branch $BRANCH_NAME does not exist."
                exit 1
            fi
        else
            # 如果本地路径存在但不是 Git 仓库，则删除该目录并重新克隆
            echo "Warning: $LOCAL_PATH is not a Git repository. Removing and cloning again..."
            rm -rf "$LOCAL_PATH"
            git clone -b "$BRANCH_NAME" "$GITLAB_URL" "$LOCAL_PATH"
        fi
    else
        # 如果本地仓库不存在，则克隆新的仓库，并指定分支
        echo "Cloning repository '$LOCAL_PATH'..."
        git clone -b "$BRANCH_NAME" "$GITLAB_URL" "$LOCAL_PATH"
    fi
    
    # 进入仓库目录
    cd "$LOCAL_PATH"
    
    # 检查 node_modules 是否存在
    if [ -d node_modules ]; then
        echo "node_modules directory exists. Proceeding with backup and build..."
    else
        echo "Warning: node_modules directory does not exist. Please upload the local node_modules package."
        exit 1
    fi
    
    # 检查 dist 目录是否存在
    if [ -d dist ]; then
        # 移动 dist 目录并重命名到目标目录
        echo "Moving dist directory before build..."
        mv dist "$LOCAL_PATH/dist_$TIMESTAMP"
        
        # 确保目标目录存在
        ensure_target_directory_exists "$TARGET_DIR"
        
        # 将备份的 dist 目录内容移动到目标目录
        echo "Moving backup build artifacts to target directory..."
        mv "$LOCAL_PATH/dist_$TIMESTAMP" "$TARGET_DIR"
    fi
    
    # 打包
    echo "Building '$LOCAL_PATH'..."
    npm run build
    
    # 检查 dist 目录是否创建成功
    if [ -d dist ]; then
        # 确保目标目录存在
        ensure_target_directory_exists "$TARGET_DIR"
        
        # 将新的 dist 目录内容复制到目标目录
        echo "Copying new build artifacts to target directory..."
        cp -r dist/* "$TARGET_DIR"
    else
        echo "Error: Failed to create dist directory after build."
        exit 1
    fi
}

# 确保目标目录存在
ensure_target_directory_exists "$TARGET_DIR_PARENT"
ensure_target_directory_exists "$TARGET_DIR_CHILDREN"

# 处理 qiankun-parent 仓库
handle_repository "$QIANKUN_PARENT_URL" "$LOCAL_PATH_PARENT" "$BRANCH_NAME" "$TARGET_DIR_PARENT" "$TIMESTAMP"

# 处理 qiankun-children 仓库
handle_repository "$QIANKUN_CHILDREN_URL" "$LOCAL_PATH_CHILDREN" "$BRANCH_NAME" "$TARGET_DIR_CHILDREN" "$TIMESTAMP"

echo "All tasks completed successfully."