---
title: 零基础搭建个人博客，手机电脑都可以
published: 2026-08-22
description: 零基础教程，使用Cloudflare Pages，支持手机Termux与电脑，完整搭建Mizuki个人博客，包含域名、SSH密钥全套实操
tags: ["教程", "Mizuki", "Cloudflare", "DNS", "Astor", "域名", "GitHub", "手机", "HoshinoHB", "Termux"]
category: 教程
draft: false
pinned: false
lang: zh-CN
---

# 为什么要搭建个人网站？
- 个人网站不仅仅局限于发布信息，它让你拥有属于自己的网络展示平台，不再受制于社交媒体的算法与平台规则。
- 网站可以展示你的职业优势、爱好以及创作内容，吸引更多关注。
- 网站就像是互联网上的个人名片，向世界展示你的专业能力与兴趣。
- 你拥有完全的控制权，可以自主决定网站内容、布局和用户体验。

## 如何搭建？
个人建站大部分都是用的 **Cloudflare** 的 **Cloudflare Pages** 来实现静态站点托管的，跟着以下教程能大大降低你建站的难度和成本。

***

### 事前准备
1. 首先我们先到 [Cloudflare](https://www.cloudflare-cn.com/personal/) 官网注册一个账户
> 如果加载太卡，可以尝试挂个加速器再试

2. 注册一个CF账户，然后就可以在 [GitHub](https://github.com/) 里去找自己喜欢用博客模板了。
- 如果你嫌麻烦，也可以直接套用我的。
- 比如，你是个《蔚蓝档案》玩家，想做一个《蔚蓝档案》主题的博客，可以参考 [Alittfre](https://github.com/Alittfre/vitepress-theme-bluearchive) 的 Vitepress‑Theme‑BlueArchive 主题，但是评论功能存在问题。如果调试嫌麻烦，也可以用 [我修改后](https://github.com/HoshinoHB/hb.ba.blog) 的版本，我把所有踩过的坑全部填好了，直接看着改就行了。
- 但如果你是喜欢折腾的，选用 [Mizuki](https://github.com/matsuzaka-yuki/Mizuki) 是个不错的选择，但是这个项目自定义项非常多，刚开始我搞了三天才搞明白怎么弄。

3. 获取一个免费三级域名
- 如果你还想要个三级域名，直接去网上搜，常见服务商：[DigitalPlat](http://dpdns.org/)、[ClouDNS](https://www.cloudns.net/)、[EU.org](https://www.eu.org/)、[DNSHE](https://www.dnshe.com/)

> DigitalPlat：每个账号仅有一个免费卡槽，域名一旦注销，免费卡槽直接失效；可以通过给项目Star获取额外卡槽。
> ClouDNS 的免费套餐**不能完整把NS交给 Cloudflare**，CF 和 ClouDNS 不是一家服务商，不要混为一谈。

DNSHE 是面向开发者、学生和开源爱好者的永久免费域名注册与 DNS 服务平台：基础域名服务永久免费，无隐藏费用，解析速度快，原生兼容 Cloudflare NS 托管。

看不懂各个平台差异，可以参考下表：

| 名称 | 优点 | 缺点 |
| --- | --- | --- |
| DigitalPlat | 1. 注册开通快，可完美迁移 NS 到 CF，适配CF Pages，解析稳定。<br>2. 免费续期无广告，支持WHOIS隐私保护。<br>3. 给官方GitHub项目Star可以白拿1个免费卡槽额度 | 1. 初始仅1个免费卡槽，域名一旦注销卡槽直接作废，不能恢复。<br>2. 想要更多域名需付费购买 key ；部分后缀现已不再免费。<br>3. 属于免费子域名，搜索引擎权重一般；平台是公益项目，存在未来关停风险 |
| ClouDNS | 1. 老牌 DNS 服务商，解析节点多，免费套餐配额足，自带 DDNS 动态域名功能。<br>2. 免费 Zone 数量多，可以建多条子域名 | 1. 免费不能直接修改根域 NS 记录给 Cloudflare ，不能完整托管 CF ；只能用 NS 记录间接转发，配置繁琐，SSL 证书 DNS‑01 验证易翻车。<br>2. IP 风控严格，注册时如果是代理/ IP 污染会直接拒注册。<br>3. 域名后缀普遍偏长，观感一般。 |
| EU.org | 1. 96年老牌公益项目，稳定性口碑很强，过审永久免费，无续期操作，完整支持自定义 NS ，可迁移 Cloudflare 。<br>2. 后缀短 xxx.eu.org，外观高级，支持 DNSSEC 。 | 1. 人工审核，时间不确定，3‑30天都有可能，急用域名不要选，需写英文用途说明。<br>2. 全英文后台，界面老旧；申请填写稍有错误直接驳回重审。<br>3. 国内访问管理面板速度慢。<br>4. 已不再提供新用户注册 |
| DNSHE | 1. 注册秒开，无需审核，完美兼容 Cloudflare 完整 NS 托管，适配 CF Pages。<br>2. 无需信用卡、实名；部分后缀初始有效期长达10年，到期免费续，变相永久使用；提供 REST API 方便自动化部署。<br>3. 一个账号可申领多个免费域名 | 1. 不同后缀有效期差异巨大，部分后缀只有1年有效期，需要记得手动续期，可以开TG提醒。<br>2. 个别后缀会出现无法接入 Cloudflare 的情况，只能路由，注册前需要简单测试。<br>3. 属于较新平台，长期稳定性尚未经过多年大规模验证 |

- DigitalPlat 适合：马上就要部署CF Pages博客，不想等审核，只需要1‑2个域名的人
- ClouDNS 适合：只使用ClouDNS自身DNS，不打算完整交给Cloudflare托管的场景；不推荐给CF‑Pages新手
- EU.org 适合：不着急、追求稳定好看后缀，愿意等待审核的长期博客。不适合快速上手教程
- DNSHE 适合：新手快速搭建 CF Pages 博客，手机 Termux 建站，想要多个免费域名

***

### 搭建与部署流程
> 电脑使用cmd终端；手机使用 Termux。
1. 安装依赖与生成SSH密钥

```
pkg install git -y
pkg install openssh -y
```
然后用下面命令获取私钥

```
ssh-keygen  -t ed25519
```
输完你就会获得一个SSH开头的密钥，按提示直接回车，当要输密码时，直接回车两次以实现无密码连接，这个是你账号密钥`**千万不要泄露**`，现在回GitHub跟着我的操作一步步来

2. 输入以下命令以获取公钥，这个要全复制，`一样要避免泄露`

```
cat ~/.ssh/id_ed25519.pub
```
- 现在先回到GitHub主页点击头像

- 再点设置进入设置页面

- 现在点 ** SSH 和 GPG 密钥**

- 现在点新的 SSH 密钥

- 随便取个名字，再把 SSH 公钥（ssh.id_sd25519.pub）粘贴进去点保存就可以了。

> 注：`私钥必须保留本地`，绝对不能泄露！！！

测试一下连通性
```
ssh -T git@github.com
```
输入`y`，如果看到`Hi XXX`就表示成功了，如果没有可以去问问 AI 或 CSDN 

3. 回到 GitHub 把目标仓库克隆到你账号下面，记住名称，然后输入以下命令
```
git clone git@github.com:XXX/XXX.git
cd hoshino.hb.blog
```
> 手机这里文件夹是在 Termux 内部存储，直接在这里修改仓库代码即可。

允许存储权限（Termux需要）
```
termux-setup-storage
```
允许权限，你的手机内部存储路径： ~/storage/shared/  。可以用 CP 把修改后的文件 Copy 进 Git 仓库目录。
也可以直接把 仓库.zip 下载到手机/电脑本地解压后再做修改。
我的话建议手机用 **nano编辑器进行修改编辑** 电脑不必要，因为手机上私有目录Root了才能看到，电脑不需要，使用以下命令安装nano编辑器

```
pkg install nano
```

然后用 cd 命令进入目标文件夹

```
cd ~/xxx
```

然后输入 `nano xxx`进入需编辑的文件中

```
nano xxx
```

这里教些快捷键

| 快捷键 | 操作 |
| --- | --- |
| Ctrl + W | 查找 |
| Ctrl + A | 移动首行 |
| Ctrl + E | 移动尾行 |
| Ctrl + K | 删除整行 |
| Ctrl + U | 剪切整行 |
| Ctrl + ＼ | 替换 |
| Alt + U | 撤回 |

> 改完再`Ctrl + O`再回车确认，再`Ctrl + X`保存退出

修改完就可以输命令上传了

```
git pull --rebase
git add .
git commit -m "XXX"
git push origin main
```

看不懂就看以下解释

| 代码命令 | 释义 |
| --- | --- |
| git pull --rebase | 拉取远程最新，防冲突 |
| git add . | 添加全部改动文件 |
| git commit -m "XXX" | 提交备注写`“”`里 |
| git push origin main | 推送到main分支 |

### 📌重危提示
1. 共享存储文件夹git报错：unsafe repository

> 如果你把仓库放在 ~/storage/shared （手机公共存储），安卓权限会触发git安全报错。
仓库目录内执行一次：

```
git config --global --add safe.directory $(pwd)
```

2. 提交前务必先 git pull --rebase ，不然会推送冲突
​
3. 提交信息 -m "xxx" 引号不能丢，中文可以正常写

### 如果是本地的代码
如果代码在手机本地存储就输入

```
cp ~/storage/shared/XXX ./
```

把代码文件CP到Termux里，电脑直接剪切移动文件到GitHub里上传或直接`cp ~/XXX ./`让CMD知道要传什么文件


***

## 成功推送
- 当终端出现`* [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
`时就代表本地main分支已经上传到GitHub远程仓库，上下游绑定完成。


***

### 接下来该做的事
1. 打开你的GitHub仓库页面，进入 Actions，看工作流是否启动，等待构建结果。
 
- 如果显示✅绿色：修复成功，不会再疯狂弹失败邮件。
​
- 如果依旧🔴红色，点开日志看Lint报错，继续排查。
 
2. 以后提交再也不用写一长串参数，直接敲这4条极简命令

```
git pull
git add .
git commit -m "写本次修改内容"
git push
```
> 小提醒：你这次是直接全量覆盖文件夹提交，历史提交记录被换了。如果Actions报错，优先看TypeScript图标相关的lint错误。
- 如果仓库分支默认选择的是`master`而不是`main`选择默认分支为`main`

1. 仓库页面右上角 ⚙️ Settings 设置
​
2. 往下滑找到 Branches 分支设置
​
3. Default branch 点切换按钮，把默认分支从  master  改成  main ，保存确认。
 
改完：Actions、Pages 就会读取main分支，跑你刚刚提交的新代码。
 
可选：旧master分支可以删掉（清理）
 
改完默认分支之后，可以删除master分支，避免以后混淆。

### 进入Actions页面，就会自动触发Workflow构建，看是绿色成功还是红色报错。

> 小提示：Termux本地现在只有main分支，没有master了，以后全部在main上面写代码提交。


***

## Cloudflare配置部署与验证测试
GitHub Pages的部署页显示这个`Mizuki`的页面就说明部署成功了，现在开始配置Cloudflare Pages


***

### Cloudflare 配置与域名注册
- 先到DNSHE 里去选择一个你喜欢的域名，注册了之后

- 点击**免费域名**

- 点击**注册新域名**

- 选择个专属根域名

> 如果想被搜索引擎收录.`.com`和`.net是个不错的选择`

### 基础 DNS 解析配置
这是最核心的基础操作，用于将域名指向你的服务器、虚拟主机或内网设备。
 
1. 登录 deSEC 控制台：https://desec.io/login
​
2. 进入「Domains」栏目，点击你注册的  xxx.dedyn.io  域名，打开 DNS 记录管理页
​
3. 点击右上角 Add record 添加解析，常用记录类型如下：

| 记录类型 | 核心用途 | 填写示例 |
| --- | --- | --- |
| A 记录 | 绑定 IPv4 公网地址 | 名称填`@`（代表主域名）内容填服务器IPv4，TTL保持默认 |
| AAAA 记录 | 绑定 IPv6 公网地址 | 名称`www`，内容填公网IPv6，即可用`www.xxx.xxx.xxx`访问 |
| CNAME 记录 | 跳转至其他域名 | 名称填blog（什么都可以），内容填`github.io`，可对接GitHub Pages等服务 |
| TXT 记录 | 域名所有权验证、邮箱配置 | 名称留空，内容粘贴服务商提供的验证字符串 |

> 解析生效时间：全球同步通常5~30分钟，本地网络缓存最长可能需要1小时。

### Cloudflare 的部署

- 先点击`计算`

- 再点 `Workers 和 Pages `

- 点`点创建应用程序`

- 按你喜欢的方式选择build

> 我推荐使用 GitHub 仓库，因为 GitHub 仓库更方便（本地上传了几次都没成功，还是 GitHub 简单）

- 选择你需部署的仓库

- **其它什么都不要管，直接点构建就可以**

- 现在等待构建成功


***

### 添加域名
1. 注册好域名后，点击 Add Site 输入你的域名
​
2. Cloudflare 会自动扫描现有解析记录，确认后进入下一步
​
3. 套餐选择最下方的 Free 计划（免费计划），继续下一步
​
4. 复制 Cloudflare 给出的2条NS服务器地址（类似  sandy.ns.cloudflare.com ）
​
5. 回到域名注册商的管理后台，将域名的NS服务器替换为刚才复制的地址
​
6. 返回 Cloudflare 点击「检查名称服务器」，等待全球同步生效（通常几小时内）
 
> 生效后即可使用 Cloudflare 全部免费功能。

### 配置域名
- 点击你的 build，点查看部署

 - 点`创建自定义域名`

- 点`继续`

- 输入域名，点`激活域`

> 稍等一下，域名显示`活动`就说明已经成功绑定 build 了，如果显示`失败`就说明未绑定成功，请按以上步骤重新操作一下，但如果多次操作仍是`失败`，就请问问 AI 或CSDN

## 结束语
最后祝你好运，成功搭建自己的个人博客站点

> 作者：HoshinoHB｜写作时间：2026-08-22



