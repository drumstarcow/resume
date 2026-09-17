# 孙涵韬 · 个人展示平台

一个用于展示个人能力与项目作品的静态网站，基于纯 HTML / CSS / JS 构建，可直接通过 **GitHub Pages** 免费上线。

## 目录结构

```
.
├── index.html            # 主页面（所有内容分区都在这里）
├── assets/
│   ├── css/style.css     # 样式表
│   └── js/main.js        # 项目 / 技能数据与渲染逻辑（你主要改这里）
└── README.md             # 本说明文件
```

## 如何修改内容

1. **个人信息**（姓名、学校、绩点、实习等）：直接编辑 `index.html` 中对应文字。
2. **项目展示**：打开 `assets/js/main.js`，修改顶部的 `PROJECTS` 数组。每个项目填 `title / desc / tags / demo / repo`。新增项目就往数组里加一个对象。
3. **技能标签**：在 `main.js` 顶部的 `SKILLS` 数组中修改。
4. **联系方式**：编辑 `index.html` 末尾 `#contact` 区块里的链接（GitHub、邮箱等）。

> 提示：实习经历、教育背景等文字区块都在 `index.html` 中，搜索对应中文标题即可定位。

## 部署到 GitHub Pages（上线步骤）

### 方式一：从 main 分支发布（最简单，推荐）

1. 在 GitHub 上新建一个仓库，建议命名为 `你的用户名.github.io`（例如 `sunhantao.github.io`）。
   - 用这个命名，站点会自动以 `https://你的用户名.github.io` 访问。
   - 用任意仓库名也可以，开启 Pages 后地址为 `https://你的用户名.github.io/仓库名`。
2. 把本目录所有文件推送到仓库：
   ```bash
   git init
   git add .
   git commit -m "初次提交个人展示平台"
   git branch -M main
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   git push -u origin main
   ```
3. 进入仓库 **Settings → Pages**（左侧栏）。
4. **Build and deployment** 中 Source 选 **Deploy from a branch**；Branch 选 **main**，目录选 **/ (root)**，点击 Save。
5. 等待 1–2 分钟，访问给出的网址即可看到站点。之后每次 `git push` 都会自动更新。

### 方式二：使用 GitHub Actions 自动部署（可选，适合后续加构建工具）

本模板是纯静态、无需构建，方式一已足够。若以后引入框架（如 Vite / React），再改用 Actions 工作流即可。

## 本地预览

直接用浏览器打开 `index.html` 即可预览；或在项目目录下执行：

```bash
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 备注

- 实习相关内容请做好脱敏，不要泄露新华三公司内部信息。
- 项目仓库链接（repo）和演示链接（demo）填到 `main.js` 的 `PROJECTS` 里即可在卡片上显示。
