---
title: 手机端 Mizuki 博客的自定义教程
published: 2026-08-23
description: 不用电脑！手机 Termux 手把手搭 Mizuki 个人博客
tags: ["教程", "Mizuki", "Astro", "手机", "HoshinoHB"]
category: 教程
draft: false
pinned: false
lang: zh-CN
---

# ❓ 什么是 Mizuki ？

- Mizuki 是个基于 Astro 的现代化静态博客模板，具有丰富的功能和美观的设计，无论是想写生活类、技术类博客，还是知识库、系列文档等，Mizuki 主题都能满足需求。 

- 本文将介绍 Mizuki 主题手机端的使用方法和最佳实践，帮助你快速修改美观、功能丰富的静态博客。

***
# ⚙️ 部署 Mizuki 

- 先去 GitHub 里把 Mizuki 给 clone 下来 [Mizuki](https://github.com/matsuzaka-yuki/Mizuki) 的仓库，具体部署流程可以看看[我的文章](https://blog.csdn.net/2606_96763730/article/details/163999698)，这里就不细说了。

# 🔧 自定义配置文件

> 注：本文章偏手机端📱，电脑端💻请使用 [Termux](https://github.com/termux/termux-app/releases/tag/v0.118.3) 修改，电脑请使用CMD或直接改文件内容

## 🔗 社交媒体链接修改

1. 打开 Termux ，执行输入`cd /你的项目文件夹/src/config/`，然后执行`ls`查看文件夹中是否有`navBarConfig.ts`文件，没有就`nano /你的项目文件夹/src/config/profileConfig.ts`没有就到 config 创一个名为`profileConfig.ts`的**文件**或重新 clone 一份仓库。

2. 输入`nano profileConfig.ts`（没有就输入`pkg install nano`安装），进入nano编辑页。

3. 按`Carl + W`打开搜索框，输入`links`查找到代码：

```bash
links: [          
{name: "Bilibili",
icon: "fa7-brands:bilibili",
url: "https://space.bilibili.com/701864046",          
 },           
 {name: "Gitee",
 icon: "mdi:git",
 url: "https://gitee.com/matsuzakayuki", 
},            
{name: "GitHub",
icon: "fa7-brands:github",
url: "https://github.com/matsuzaka-yuki",            
},             
{name: "Codeberg",
icon: "simple-icons:codeberg",
url: "https://codeberg.org",             
},             
{name: "Discord",
icon: "fa7-brands:discord",
url: "https://discord.gg/MqW6TcQtVM",             
},      
],};
……
```

- 然后到B站、GitHub或其它你用的社交平台复制你的社交链接。

- 如果你想改图标，可以到[Font Awesome](https://fontawesome.com/icons/packs/brands)去找找有没有符合你需求的社交媒体的icon- 比如我的：

```bash
links: [                                     
{      
           name: "Bilibili",      
           icon: "fa7-brands:bilibili",      
           url: "https://b23.tv/is2z37Y"    
           },                                           
          {      
           name: "抖音",      
           icon: "fa7-brands:tiktok",     
           url: "https://v.douyin.com/hzJCUqzF6p>   
           },    
          {      
            name: "GitHub",      
            icon: "fa7-brands:github",      
            url: "https://github.com/HoshinoHB"    
         }   
  ]};
  ```
  > `icon`到`Font Awesome`里去搜一下你所需的平台图标
## 🪪 个人简介修改
1. 还是`profileConfig.ts`，找到：

```bash
export const profileConfig: ProfileConfig = {        
avatar: "assets/images/avatar.webp",         name: "まつざか ゆき",        
bio: "世界は大きい、君は行かなければならない",
```

可以改`name`和`bio`的部分比如：

```bash
export const profileConfig: ProfileConfig =>  
avatar: "assets/images/avatar.webp",  
name: "HoshinoHB",  
bio: "以科技连接世界，以信息链接网络",
```

- 头像部分看后面

> 改完个人资料别忘了改`navBarConfig.ts`的链接，代码如下原：

```bash
export const navBarConfig: NavBarConfig = {       
links: [    
……              
{              
name: "Links",              
url: "/links/",              
icon: "material-symbols:link",              
children: [               
{               
name: "GitHub",              
url:"https://github.com/LyraVoid/Mizuki",              
external: true,                
icon: "fa7-brands:github",               
},               
{               
name: "Bilibili",               
url: "https://space.bilibili.com/701864046",               external: true,               
icon: "fa7-brands:bilibili",                
},                
{                
name: "Gitee",                
url: "https://gitee.com/matsuzakayuki/Mizuki",                 
external: true,                 
icon: "mdi:git",                
 },       
   ],},
……
```

一起改了：

```bash
……
name: "GitHub",
url: "https://github.com/HoshinoHB",
external: true, 
icon: "fa7-brands:github",                       
},                           
{name: "Bilibili",
url: "https://b23.tv/is2z37Y",
external: true,
icon: "fa7-brands:bilibili",                    
},                           
{
name: "抖音",
url: "https://v.douyin.com/hzJCUqzF6pE/",
external: true,
icon: "fa7-brands:tiktok",
……
```

## ⚙️ 站点核心配置
### 站点语言

1. 修改默认语言

- 用 nano 打开 siteConfig.ts ，代码如下：

```bash
nano siteConfig.ts
```

- 然后找到`const SITE_LANG = "en"`，修改如下：

```bash
const SITE_LANG = "zh_CN";# 中文简体

const SITE_LANG = "en";# 英文

const SITE_LANG = "jp";# 日文
```

2. 站点名称标题和描述修改

```bash
export const siteConfig: SiteConfig = {       
 
 title: "Mizuki",  # 站点名称标题       
 
 subtitle: "One demo website",  # 站点描述
         
 siteURL: "https://mizuki.mysqil.com/",  # 你的站点 URL 域名 
 ```
 
 3. 站点标题修改
 
 ```bash
 homeText: {
 enable: true,
 title: "わたしの部屋",# 站点大标题（同时也是站点底部版权标题）        
 switchable: true,      
 subtitle: [ # 副标题，滚动字幕            
 "特別なことはないけど、君がいると十分です",            
 "今でもあなたは私の光",            
 "君ってさ、知らないうちに私の毎日になってたよ",             
 "君と話すと、なんか毎日がちょっと楽しくなるんだ",              
 "今日はなんでもない日。でも、ちょっとだけいい日",               
 ],
 ```
 
 ### 🪧站点公告配置
1. 输入`nano announcementConfig.ts`打开公告配置文件：

```bash
export const announcementConfig: 
AnnouncementConfig = {        
title: " ", # 公告标题        
content: "ブログへようこそ！これはサンプルの告知です", # 公告内容
```

# 🖼️ 站点图片修改
### 🧒 头像图片替换

1. 回到`src`

2. 输入`cd src/assets/images/`，把你要替换的图`cp`进去> 注：图片要是.webp格式后缀，完整代码如下：

```bash
# 头像存储地址

cd ~/你的仓库/src/assets/images/

# 剪切你的头像图片，记得转换成webp格式，文件名称最好为 assets ，不改就要给配置文件了

cp -f assets.webp /你的仓库/src/assets/images/assets.webp
```

### 🏜️ 站点背景图替换
1. 移动端背景图，配置步骤如下：

- 用 cd 命令进入`src/assets/public/assets/desktop-banner和mobile-banner`文件夹。

- 把需替换的图片 cp 过去即可。

- 然后再把`根目录/public/assets/desktop-banner和mobile-banner`也换了。

- 不会的话，完整代码如下：

```bash
# 电脑端的

cp  *.webp src/assets/public/assets/desktop-banner

# 手机端的cp *.webp src/assets/public/assets/moboile-banner

# ”~”代表完整目录，到时候自己替换成你的仓库名称```

### 🌌 站点图标

1. 再次进入`根目录/public/assets/`里，然后进`home`里去。

2. 继续用 cp 把`default-logo.webp`和`home.webp`都改了，改完就基本差不多了。

- 完整代码如下：

```bash

# 进入站点图标地址

cd ~/你的仓库/public/assets/home/

# 替换站点图标icon

cp -f ~/下载目录/home.webp home.webp # 站点icon图标，用户、Google、Bing可见的

cp -f ~/下载目录/default-logo.webp default-logo.webp # 站点 Logo 图标，搜索引擎和爬虫看的
```

### 🎵 站点音乐

1. 还是`根目录`，还是`public/assets`，然后 cd 进 music 里，再到`url`文件夹里，操作步骤如下：

- root → public/assets → music → url 

2. 继续用 `cp`命令把.mp3文件拷贝过来

- 完整代码如下：

```bash

# cd 进音乐文件夹

cd ~/你的仓库/public/assets/music/url/

# 音乐文件，把当前目录全部mp3复制到此目录

cp *.mp3 ~/你的仓库/public/assets/music/url/
```

### 📌 关于页配置修改

1. 改完后示例图
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/14fa936e4f4047d29dc4b407049ff149.jpg)

2. 现在来到`src/content/spe/`，把`about.md`修改一下就行，代码如下：

```bush
# 定位文件

cd ~/src/content/spe/

# 修改`关于我`

nano about.md
```

### 📈 修改时间线

1. 进`dada/timeline.ts`，把里面的内容改下就行了，占 GitHub 仓库内存，示例如下：

```bash

# 目标

import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData:

TimelineItem[] = [
        
{

# 把下面改了就行
                
id: "current-study",
                
title: "Studying Computer Science and Technology",
                
description:                        "Currently studying Computer Science and Technology, focusing on web development and software engineering.",
                
type: "education",                

startDate: "2022-09-01",                

location: "Beijing",                

organization: "Beijing Institute of Technology",                

skills: ["Java", "Python", "JavaScript", "HTML/CSS", "MySQL"],                

achievements: [                        

"Current GPA: 3.6/4.0",                        

"Completed data structures and algorithms course project",                        

"Participated in multiple course project developments",                
],                

icon: "material-symbols:school",                

color: "#059669",                

featured: true,
        
},
        
{

# 示例
    
id:"自建博客",
    
title: "搭建个人博客",
    
description: "使用 Mizuki 主题，搭建自己的个人博客站点",
    
type: "技术",
    
starDate: "2026‑08-25",
    
location: "中国",
    
organization: "中国学校",
    
skills: ["Astro"]
    
achievements: [                 
"noll"                     
],

# 其它我懒的写，所以这里就没了，原先让 AI 教我写，AI给我个就 ID、时间、介绍 ，现在我写的是完整版，可以直接复制粘贴参考修改
```

# 📍 结束语

- 这章的`Mizuki`配置修改就到这里结束了，感谢您的阅读

- 请务必继续关注我，还有什么疑问欢迎留言交流。

- 我们下篇文章再见🎉🎉🎉
