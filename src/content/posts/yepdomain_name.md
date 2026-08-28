---
title: 域名的使用教程
published: 2026-08-26
description: 零基础教程，手把手移动端域名申请与构建教程
tags: ["教程", "DNS", "Cloudflare", "域名", "手机", "GitHub"]
category: 教程
draft: false
pinned: false
lang: zh-CN
---

# ❓什么是域名？

- 域名（英语：Domain Name）。

- 又称网域，是由一串用点分隔的名字组成的互联网上某一台计算机或计算机组的名称。

- 用于在数据传输时对计算机的定位标识。

- 域名作为一个互联网基础架构的重要组成部分。

- 目的就是为了方便用户使用习惯去记住该网站的特征和地址信息。

## 🌐 如何申请免费域名？

- 最简单的方法就是去申请一个免费的二级域名，以下是我用过的几个免费二级域名申请网站，可以参考：

| 服务商 | 优点 | 缺点 |
| ---- | ---- | ---- |
| [DNSBEE](https://dns.seaoss.com/) | 1. 围绕域名注册与DNS管理提供清晰、可靠的完整流程。2. 简单、快速、免费的域名注册服务。3. 无信用卡，无隐藏费用。 | 1. 国内访问需绕道香港或日本节点，延迟较高。 2. 修改记录生效慢。3. 受CDN缓存影响。 |
| [ClouDNS](https://www.cloudns.net/) | 1. 永久免费（4 域 + 50 记录）。2. 独立厂商，避免 DNS 锁定。 3. GeoDNS / Failover / DDoS 防护完整。4. 运营 16 年，保加利亚管辖。 | 1. 免费域 NS 共享。2. 国内访问延迟 100-200ms（付费改善）。3. Cloudflare 免费版不支持 DNS 托管。 |
| [ZoneABC](https://zoneabc.net/register) | 1. 非高级的二级域名无需积分。2. 高级域名需一定积分。3. 域名可转让。4. 每人可获 5 个域。 | 1. 部分域名不可托管到 CF 免费计划。2. 可以享受 CF 企业版计划。 |
| [deDNS](https://desec.io/) | 1. 每个人都可以免费使用。2. 免费用户可添加 15 个二级域。3. 可使用第三方dns服务器。4. CF 支持添加。| 1. 解析记录不限。2. 一个账号只能注册一个域名。3. 只能使用dedyn.io域名。 |
| [DigitalPlat Domains](https://domain.digitalplat.org/) | 1. 免费子域名注册服务。2. DNS 管理系统。3. 开源域名平台支持。 | 1. 可能会因违规或长期不使用被回收。2. 新用户就一条域。3. 部分 CF 不支持托管。 |
| [DNSHE](https://my.dnshe.com/) | 1. 无需信用卡绑定。2. 无隐藏费用。3. 支持全类型 DNS 记录解析。4. 即时上线各类数字项目。5. 初始 3 额度 | 1. 不稳定，网络会波动。2. 域名少。  |

> 我挺爱用 DNSHE 的，因为习惯了，而且 DNSHE 给的也很大方，邀人和做任务就能拿。

![DNSHE邀请码界面](/assets/post-images/yepdomain_name1.jpg)


- 现在选择一个合适自己的服务即可。

***

# ❓ 什么是静态 Pages ？
- 静态网页 英文：Static Web Page。

- 是指内容固定、不随用户或时间变化的网页。

- 通常以 .html 文件形式直接存储在服务器上，无需服务器端脚本处理。

- 它向所有访问者展示相同的信息，不包含动态生成或交互功能。

## 📄如何部署静态 Pages ？

- 最简单的就是直接用云服务器商托管站点文件，静态 Pages 无需自购服务器，支持自定义域名和 SSL、HTTPS 。

| 服务商 | 优点 | 缺点 |
| --- | --- | --- |
| [GitHub Pages](https://github.com/) | 1. 完全免费，与 GitHub 仓库深度集成。2. Git 推送即可部署，开源项目生态友好。3.  支持自定义域名，自动 HTTPS 证书。 | 1. 国内访问速度差，经常超时。2. 仅公开仓库可部署，私有仓库不可用。3. 带宽 100 GB/月软限制，单仓库上限 1 GB。4. 无 PR 预览功能，没有边缘函数能力。 |
| [Cloudflare Pages](https://www.cloudflare-cn.com/personal/) | 1. 静态带宽无限，支持 Git 自动部署，也可直接上传 dist 压缩包。2. 公开、私有仓库都支持，PR 预览、版本回滚齐全。3. 免费绑定自定义域名，自动签发 SSL 证书。4. 可搭配 Workers 实现边缘函数、重定向、请求修改。 | 1. 国内无本土节点，部分运营商访问波动大。2. 每月免费构建 500 次，频繁提交会耗尽额度。3. 单文件最大 25 MB，不适合大文件分发。 |
| [Gitee Pages](https://gitee.com/) | 1. 国内 CDN，国内访问速度优秀。2. 免费使用，自带 HTTPS，无需额外配置。3. 国内仓库，代码管理方便。 | 1. 免费版**不能自动部署**，push 代码后需要手动点击更新。2. Pro 个人购买入口关闭，免费版无法绑定自定义域名。3. 部署存在内容审核，更新有延迟。4. 需要账号实名认证。 |
| [AxureShow](https://www.axure.com/) | 1. 直接上传 zip 压缩包部署，不需要 Git，手机浏览器也能操作。2. 国内 CDN 访问快，不需要备案。3. 适合原型、临时预览 dist 产物。 | 1. 免费版**不支持绑定自有域名**，只能使用平台分配链接。2. 没有Git自动部署，更新站点需要重新上传压缩包。3. 只适合临时演示，不适合正式长期博客。 |
| [EdgeOne Pages](https://pages.edgeone.ai/) | 1. 国内边缘节点，国内访问体验优秀。2. 静态流量请求不限量，长期免费，无需备案。3. 支持Git自动部署，也支持上传压缩包部署。4. 支持绑定自定义域名，自动下发SSL证书，附带边缘函数能力。 | 1. 系统默认`.edgeone.cool`预览域名不能长期正式使用，正式站点必须绑定自有域名。2. 边缘函数、构建存在免费配额，纯静态博客基本不受影响。3. 属于腾讯云产品，需要腾讯云账号实名。 |

- 选择一个你喜欢的方案即可。

***

# 🌐 部署流程

> 提示：以下流程是 Cloudflare Pages，其它方式请自行查找。

1. 准备

- 1. 在 [Cloudflare](https://www.cloudflare-cn.com/personal/) 注册一个 CF 免费账户，Outlook、Gmail都可以。

- 2. 在仪表盘旁边找到 **计算**，然后找到**Workers 和 Pages**，如图：
![CF计算选项](/assets/post-images/yepdomain_name2.jpg)

- 3. 点击 **创建应用程序**
![CF创建应用程序](/assets/post-images/yepdomain_name3.jpg)

- 4. 选择 **继续使用 GitHub** 并登录你的 GitHub 账号
![CF继续GitHub登录](/assets/post-images/yepdomain_name4.jpg)

-  5. 选择你需要部署的仓库
![CF选仓库](/assets/post-images/yepdomain_name5.jpg)

-  6. 等待 **构建指令** 成功执行，然后点击部署
![Cf构建](/assets/post-images/yepdomain_name6.jpg)

- 7. 在 **Workers 和 Pages** 找到你的仓库，点击旁边`···`，选择 **查看部署**
![CF查看部署](/assets/post-images/yepdomain_name7.jpg)

- 8. 如下图，第一次部署成功会是`绿√`，红X代表部署失败，详细请自行问询 AI
![CF部署成功](/assets/post-images/yepdomain_name8.jpg)

- 9. [自定义域名](https://hoshinohb.de5.net/posts/websitewebsite_setupbuilding_tutorial/)请看我的博客文章，这里不再赘述。

- 10. [手机端详细教程](https://hoshinohb.de5.net/posts/introduce-yourself/)请看我的另一篇文章，这里也不再赘述。

- 也可以参考[我的CSDN文章](https://blog.csdn.net/2606_96763730/article/details/164093504?sharetype=blog&shareId=164093504&sharerefer=APP&sharesource=2606_96763730&sharefrom=link)

***

# 结束语

- 感谢您的阅读，祝您拥有一个愉快的生活，祝您的博客访问越来越多(っ•̀ω•́)っ✎⁾⁾。

- 纯手机写，电脑用不习惯，但我手机恢复出厂了，啊w(ﾟДﾟ)w，我的数据啊！｡°(°¯᷄◠¯᷅°)°｡我的Telegram啊ಥ_ಥ。








