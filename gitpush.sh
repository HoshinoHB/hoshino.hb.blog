#!/data/data/com.termux/files/usr/bin/bash
# 简易git一键提交推送
echo "==== Git自动提交工具 ===="
git status
echo
read -p "更新文件 " msg

if [ -z "$msg" ];then
  msg="update: $(date '+%Y-%m-%d %H:%M')"
fi

git add .
git commit -m "$msg"
git push
echo "✅ 操作完成"

