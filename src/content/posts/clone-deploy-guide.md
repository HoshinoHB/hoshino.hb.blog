---
title: 项目的克隆与部署
date: 9999-12-31
tags: [vue, vitepress]
---

# 首先

欢迎来到 **HB的博客**！这是一篇使用 [vitepress-theme-bluearchive](https://github.com/Alittfre/vitepress-theme-bluearchive) 主题的示例文章。
此文章编于2026年7月4日

## 介绍

我是一名来自江西的初中生，我是从2022年开始学习并接触编程。一个二次元忠持爱好者，一个喜欢《蔚蓝档案》、《碧蓝航线》、《终末地》、《异环》《三角洲行动》的视频创作者。

## 克隆仓库

在[我的仓库](https://github.com/HoshinoHB/hb.ba.blog)中选择克隆仓库，并创建您自己的仓库，名字什么都随便，比如“HuiMake.ba.io”，如果你想直接到GitHubPages部署的话就必须改为“HuiMake.github.io”

[原作者的项目](https://github.com/Alittfre/vitepress-theme-bluearchive)里的Gitalk组件太老了，还有BUG，（主要我不太会写），所以我改成了Giscus评论组件，只需要配置你的Giscus就可以了，这个后面说

## 部署Cloudflare

首先在[Cloudflare官网](https://www.cloudflare-cn.com/personal/)注册一个Cloudflare账号，然后在控制台中选择添加[Workers和Page](https://dash.cloudflare.com/04629489a62cdb48f65915c2e8c2aa31/workers-and-pages)选择**创建应用程序**，点击下方的**先要部署Pages？开始使用**，导入Git的仓库项目（没绑GitHub的去绑定GitHub账号就行），然后选择一个仓库项目部署，部署完了之后再把网址复制（https://你仓库项目名.pages.dev）一会用

## 修改config.mts

在仓库的项目文件夹你的仓库项目.vitepress/config.mts中找到“生成站点地图”
```
  //   hostname: 'https://hb-ba-blog.pages.dev/'//改成你刚才在Cloudflare部署出的二级域名即可
......
  title: "Sensei HoshinoHB", //   可改
  description: "Sensei HoshinoHB",//   可改
```
找到banner区配置
```
    name: "Sensei HoshinoHB",//   修改即可
```
social区配置也可修改（不然就直接导航我的主页去了），原作者配置了GitHub、B站、QQ、VX等icon，我已配置了抖音，自己去改就行

## 配置评论功能

先到GitHub的设置中配置Giscus，没安装的[安装一下](https://github.com/giscus)，配置过程我忘了，可以去问问AI或者B站上看看

之后回到config.mts文件中，找到giscus配置
```
    giscusRepo: 'HoshinoHB/hb.ba.blog',//改成你Giscus配置里的
    giscusRepoId: 'R_kgDOTMEI6A',
    giscusCategory: 'Announcements',
    giscusCategoryId: 'DIC_kwDOTMEI6M4CltSJ',//改成你自己创建的Giscus配置里的ID
```

## 结语

千里之行，始于Git。希望这篇文章能帮助你快速上手使用部署个人博客，开启愉快的写作之旅！