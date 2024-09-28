# 自动化构建脚本说明

此脚本用于自动化处理 `qiankun-parent` 和 `qiankun-children` 两个仓库的构建流程，并将构建结果分别移动到 `shch_web` 和 `front-web` 目录下。构建过程中会根据最新的 Git 提交记录的 Commit ID 后六位作为打包的后缀名。

## 目录结构

/Users/jqh/Desktop/jqh/code/shell/

- qiankun-parent/
  - qiankun-children/
  - dist/ (生成于构建后)
- shch_web/
  - front-web/

## 脚本功能

1. **更新仓库**：更新 `qiankun-parent` 和 `qiankun-children` 仓库。
2. **备份 `dist` 文件夹**：如果 `dist` 文件夹存在，则先备份并重命名。
3. **移动备份的 `dist` 文件夹**：将备份的 `dist` 文件夹移动到相应的目标目录。
4. **打包**：执行 `npm run build` 来构建项目。
5. **替换目标目录内容**：用新生成的 `dist` 文件夹内容替换目标目录中的内容。

## 使用方法

1. **编辑脚本变量**：

   - 编辑仓库的 URL (`QIANKUN_PARENT_URL`, `QIANKUN_CHILDREN_URL`)。
   - 编辑本地存储路径 (`LOCAL_PATH_PARENT`, `LOCAL_PATH_CHILDREN`)。
   - 编辑目标目录路径 (`TARGET_DIR_PARENT`, `TARGET_DIR_CHILDREN`)。
   - 编辑分支名称 (`BRANCH_NAME`)。

2. **运行脚本**：
   ```bash
   chmod +x setup_repositories.sh
   ./setup_repositories.sh
   ```
