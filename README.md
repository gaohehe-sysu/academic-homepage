# 高涵个人学术主页

这是一个 Hugo 静态站点。当前首页模板保留原有单页设计、中文主内容和前端英文切换。

访问地址使用最短的 GitHub Pages 用户主页形式：`https://gaohehe-sysu.github.io/`。当前 Hugo 配置的 `baseURL` 已按这个地址设置。

## 本地预览

```sh
hugo server --renderToMemory --disableFastRender --baseURL http://127.0.0.1:1313/
```

浏览器打开 `http://127.0.0.1:1313/`。

## 构建发布文件

```sh
hugo --minify
```

构建结果会输出到 `public/`，该目录已加入 `.gitignore`。

## 公开发布

当前远端仓库为 `gaohehe-sysu/gaohehe-sysu.github.io`，可见性为 Public。请在 GitHub 仓库 Settings -> Pages 中把 Source 设为 GitHub Actions。推送到 `master` 后，`.github/workflows/pages.yml` 会自动构建并发布到 `https://gaohehe-sysu.github.io/`。

## 常用文件

- `layouts/index.html`：首页 Hugo 模板
- `static/css/style.css`：页面样式
- `static/js/script.js`：页面交互和双语切换
- `static/assets/avatar.jpg`：头像
- `static/主页背景.JPG`：首页背景图
- `static/高涵简历最新.pdf`：简历下载文件
- `学术公共品/阅读笔记/`：公开下载的 PDF 阅读笔记
