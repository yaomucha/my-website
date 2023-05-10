---
title: 'Git'
preContent: 'git常用命令'
date: '2023-05-05'
categories: ['git']
---

`init` 在当前目录新建一个Git代码库

`clone`  下载项目

`remote -v` 显示所有远程仓库

`branch`  显示本地分支

`branch -r`  显示远程分支



`git merge` 指定分支名   合并到当前分支

`git push` 链接 分支名  （git push origin develop） 推送

`git checkout` 分支名  切换到某个分支

`git checkout` 文件名  丢弃修改

`git show commitId` 查看某个commit的内容


`git reset --soft HEAD^`  撤销commit到暂存区

`git reset HEAD <file>`  撤销暂存区文件
