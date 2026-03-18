### how to access the markdown file by html



您可以利用 GitHub Pages 功能，将您的 Markdown 文档以网页的形式展示。GitHub Pages 是 GitHub 提供的一项免费静态网站托管服务。

### 以下是设置步骤：

1. 创建或选择一个分支: 确保您的 Markdown 文件存在于您仓库的某个分支上，例如 `main` 或者 `master`。

2. 启用 GitHub Pages:
- 进入您的 GitHub 仓库页面。
- 点击上方的 "Settings" (设置)。
- 在左侧菜单中，选择 "Pages" (页面)。
- 在 "Build and deployment" (构建和部署) 下的 "Source" (源) 部分，选择您要部署的分支。通常是 `main` 或 `master`。
（可选）您可以选择一个特定的文件夹来存放您的网站文件，通常是 `/docs` 目录或者根目录 `/`。
- 点击 "Save" (保存)。
  
3. (可选) 添加主题:
为了让您的 Markdown 文件渲染出来的页面更美观，您可以使用 Jekyll 主题。GitHub Pages 默认使用 Jekyll 来构建网站。

- 在您的仓库根目录创建一个名为 _config.yml 的文件。
- 在该文件中添加以下内容来选择一个主题（例如 jekyll-theme-minimal 是一个简洁的主题）：

```theme: jekyll-theme-minimal```

- 您可以在这里找到更多 Jekyll 主题。
  
4. 访问您的网站:

- 设置保存后，GitHub 会为您的仓库创建一个网站。您通常需要等待几分钟让网站构建和部署完成。
- 部署成功后，您会在 "Pages" 设置页面顶部看到您的网站地址，格式通常是 `https://<您的用户名>.github.io/<您的仓库名>/`。
- 例如，如果您的仓库中有一个名为 README.md 的文件，您可以通过 https://<您的用户名>.github.io/<您的仓库名>/ 来访问它。如果有一个 docs/getting-started.md 文件，您可以通过 https://<您的用户名>.github.io/<您的仓库名>/docs/getting-started 来访问。
  
通过以上步骤，您的 Markdown 文件就可以像普通的网页一样被访问了。
