---
title: 修 BUG 到想死的一天
published: 2026-08-28
description: 为了迁移新项目，把老项目一整个整改了导致的连锁 BUG
tags: ["HoshinoHB", "Termux", "AI", "日常", "随笔"]
category: 日常
draft: false
pinned: false
lang: zh-CN
---

# 😭 为什么？？
## 起因
- 今天是2026/08/28-10/18PM。

- 我逛 GitHub 的时候发现 Mizuki 原项目已经更新了。

- 然后我就想把我的博客完全迁移过去

## 经过
- 今天我把之前网站的（Mizuki），从Matsuzaks-Yuki的[复刻改版](https://github.com/matsuzaka-yuki/Mizuki)完全迁移到了LyraVoid的[新版](https://github.com/LyraVoid/Mizuki)。

- 代码经过我一天（从 12:10 到 18:41）的时间把原项目完全迁移修改成了我自己的博客版本。

- 然后在把我之前博客的图片内容全部迁移到新版博客中。

## 结果
- Cloudflare Pages 几页的部署错误和 GitHub 几页的错误报告。

- 经过我和 2 位 AI 的分析与排查，从 19:21 到 22:03 才解决问题。

### 📈 结论
- 1. 我把几个关键代码给删了；
  2. 部分 TS 文件中的图标集我用成了 Mizuki 中没安装的图标集，所以导致了部署的失败；
  3. 我把部分代码给注释掉了；
  4. 部分文件的代码我写错了。

# 📆 现在
- 现在已完全迁移完成到了 LyraVoid 的最新 Mizuki 文件中。

- 现在已经可以正常更新了。

- 加油！(ง•̀_•́)ง还有最后一年的时间✧٩(ˊω`*)و✧！！！

- 完马上就要毕业啦！(⋟﹏⋞)
> 作者：HoshinoHB｜写作时间：2026/08/28
