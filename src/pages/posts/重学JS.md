---
title: '重学JS'
preContent: 'We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request'
date: '2023-05-05'
categories: ['js']
---

# 语法

### 标识符

**1. 下面列出的值被当作假（false）**
- false
- null
- undefined
- 空字符串''
- 数字0
- 数字NaN


其他所有的值都被当做真，包括true、字符串"false"，以及所有的对象（**包括空对象{}**）


**2. for in**
   > for in 会枚举一个对象的所有属性名（或键名）。在每次循环中，object的下一个属性名字符串被复制给variable。通常需要用`object.hasOwnProperty(variable)`来确定这个属性名是该对象的成员，还是来自于原型链。
   ``` javaScript
    for(myVar in obj){
        if(obj.hasOwnProperty(myvar)){
            ...
        }
    }
   ```

    > obj.hasOwnProperty