---
title: 'display中的table-cell'
preContent: '偶然看到css怎么垂直水平居中多行文本的文章，看到有用到display中的table-cell属性，了解之后，故作此文总结'
date: '2023-08-22'
categories: ['css']
---
偶然看到css怎么垂直水平居中多行文本的文章，看到有用到display中的table-cell属性，了解之后，故作此文总结

mdn官方对此属性的解释是:
> These elements behave like [`<td>`](https://developer.mozilla.org/en-US/docs/Web/CSS/display#:~:text=table%2Dcell,td%3E%20HTML%20elements) HTML elements

而`<td>`的属性中，有[`align`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#:~:text=the%20title%20attribute.-,align,-Deprecated)和[`valign`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#:~:text=is%20a%20header.-,valign,-Deprecated)两个属性，可以分别控制水平、垂直的表现形式

><span style="color:#ffd7de;font-weight:700;">Note:</span> [To achieve a similar effect, use the CSS vertical-align property](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#:~:text=To%20achieve%20a%20similar%20effect%2C%20use%20the%20CSS%20vertical%2Dalign%20property.)

table中关于这两个属性的使用方法如下：
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            td {
                height: 100px;
                border: 1px solid;
            }
        </style>
    </head>
    <body>
        <table>
            <tr>
                <td valign="middle">第一行第一行第一行第一行第一行第一行第一行第一行第一行第一行<br /> 第二行第二行第二行第二行第二行第二行第二行第二行第二行第二行</td>
                <td valign="top">1</td>
                <td valign="bottom">1</td>
                <td>1</td>
                <td>1</td>
            </tr>
        </table>
    </body>
</html>
```


最终代码为：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .box {
                width: 500px;
                height: 300px;
                border: 1px solid;
                vertical-align: middle;
                display: table-cell;
            }
        </style>
    </head>

    <body>
        <div class="box">
            第一行第一行第一行第一行第一行第一行第一行第一行第一行第一行
            <br />
            第二行第二行第二行第二行第二行第二行第二行第二行第二行第二行
        </div>
    </body>
</html>
```

