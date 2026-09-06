---
title: 手机也能搞定图床配置实战
published: 2026-09-06
description: 对比 GitHub、Gitee、Cloudflare R2 三款主流图床方案，完整讲解使用GitHub + jsDelivr + PicHoro搭建免费外链图床全过程，包含令牌生成、参数配置、安全注意事项，手机端也可以完成部署，适合个人静态博客使用。
tags: ["HoshinoHB", "教程", "GitHub"]
category: 教程
draft: false
pinned: false
lang: zh-CN
---

# 🪧前言
## ❓啥是图床？
- 图床是一种在线图片存储和托管服务，用户可以上传图片并获得唯一链接，用于在网页、博客或社交媒体中分享和展示图片。
- 图床是指专门用于存储图片的服务器或在线空间，用户上传图片后，图床会为每张图片生成一个唯一的URL链接或嵌入代码，使图片可以在任何支持外链的网页或应用中显示。可以把图床理解为一个“网络相册”，不同于本地存储，图片可以被全球访问。

***

# 💡配置教程
- 以下是推荐的图床对比选择方案，可以根据个人需求进行选择。
|对比项目|GitHub|Gitee|Cloudflare R2|
|---|---|---|---|
|费用|免费，仓库上限 5 GB，单文件 100 MB	免费|仓库上限5 GB，单文件 100 MB|免费额度：10 GB 存储，流出免费；超出按量计费
|支付要求|无需支付绑定|无需支付绑定|必须绑定支付方式才能激活|
|PicHoro 支持|✅完整支持|✅完整支持|❌无原生支持|
|外链防盗链|jsDelivr 无防盗链，稳定性高|存在Referer 防盗链，网页部署极易 403|无防盗链，可自定义域名对外访问|
|国内访问速度|jsDelivr 国内尚可|原生国内速度快|国内直连速度一般，需搭配 CDN|
|数据存储位置|GitHub 仓库|Gitee 仓库|	Cloudflare 对象存储|
|隐私特性|必须公开仓库才可外链；私有仓库无法读取|必须公开仓库才可外链；私有仓库无法读取|文件可私有，自定义域名实现公开访问|
|备份方式|Git 版本回滚|Git版本回滚|版本需要自行开启|
|上手难度|低，配置完 PicHoro 直接输出MD链接|低，但上线容易触发防盗链踩坑|高，需要处理 R2 策略、自定义域名|
|核心短板|仓库必须公开；jsDelivr 存在缓存延迟|线上博客大量 403，不适合正式博文图床|激活门槛高，需要绑定支付凭证，手机配置繁琐|
> 这里我选择用 GitHub + jsDelivr + PicHoro 作为图床的搭建。

## 以下为📱搭建流程
### 1. 准备工作
- 去 [GitHub](https://github.com/) 注册个GH账号。
- 到[这里下载](https://github.com/Kuingsmile/PicHoro)安装 PicHoro。

### 2. 生成 GitHub 令牌
- 跳转[到这里](https://github.com/settings/tokens)获取，Token。
- 1. 登录你的 GitHub 账号  `Logs in to GitHub` 
- 2. 右上角头像 → Settings → 拉到最底部 Developer settings → Personal access tokens → Tokens (classic) → Generate new token (classic)
- 3. 填写：
- Note：随便写  PicHoro图床 
- Expiration（过期时间）：选 No expiration 永不过期
- 权限 scope：只勾选  repo （全部repo权限），别的全部不要勾！
- 4. 滑到底点 Generate token，立刻复制生成出来的一串字符串
> ⚠️重点：这个Token只显示这一次！页面刷新之后就再也看不见，丢了只能重新生成。

### 3. 回到 PicHoro
- 1. 设置 → 图床参数设置 → GitHub 图床 → Token 框粘贴刚才复制那一大串字符 →填写你的 GitHub 用户名和仓库地址
-2. 高级配置填写：
- 存储路径： images/  （图片自动丢进仓库images文件夹）
- 分支： main （你的仓库主分支）
- 自定义域名： https://cdn.jsdelivr.net/gh/你的用户名/你的仓库地址@main 
3. 点保存设置，点「检查当前配置」，提示成功就可以上传图片。
#### ⚠️安全提醒
 - 1. 这个Token有仓库读写权限，不要发给任何人，不要写进博客源码。泄露别人就能往你的图片仓库乱传删文件。
​- 2. 如果怀疑泄露，回到GitHub直接删掉旧Token，重新生成新的再填进PicHoro。
​- 3. 仓库确认是 Public公开仓库，私有仓库jsDelivr无法读取图片。
 - 填完上传测试一张截图，输出链接格式类似：
 ```markdown
https://cdn.jsdelivr.net/gh/你的用户名/仓库地址@main/images/你的图片地址.jpg
```
- 直接复制粘贴进你的博文即可。 
> 小提示：jsDelivr有CDN缓存，刚上传完图片，如果网页暂时没刷新出来，等1‑2分钟缓存更新就显示正常，不用反复重传。

## 📌额外备份建议
> 图床仅负责网页对外展示，重要素材建议建立多层备份：
1. 手机本地保存原始图片（终极兜底）
2. GitHub图床仓库（网页CDN访问）
3. 异地网盘冷备份（例如123云盘私有文件夹，**不开启分享，不作为图床外链使用**）

***

# ⛔️ 结束
- 如果成功了记得点个赞和收藏。
- 如果失败了可以评论区讨论。
- 如果对你有帮助，还请给个点赞收藏(^🙏^)

> 作者：HoshinoHB｜时间：2026-09-06-19-39


