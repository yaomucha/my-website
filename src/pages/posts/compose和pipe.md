---
title: 'compose和pipe'
preContent: 'compose和pipe的写法及作用'
date: '2023-05-10'
categories: ['js']
---

## compose

> 需求： 给定一个输入值X，先给这个值加10，然后结果乘以10
>
> 需要用到的知识点：
> Array.prototype.reduce
> Array.prototype.reduceRight

```javascript
const add = x => x + 10
const multiply = x => x * 10

const res = multiply(add(1)) //200
```

上面的计算方法就是函数的嵌套执行，而 compose的作用就是将**嵌套执行的方法平铺**。
嵌套执行的时候，里面的方法也就是**右边的方法最开始执行，然后往左边返回**。

我们的compose方法也是从右边的参数开始执行，所以我们需要一个像这样的compose方法：

**参数从右往左执行，所以multiply在前，add在后**

```javascript
let res = compose(multiply, add)(10);


function compose(){
    const args = [].slice.apply(arguments);

    return function(x){
        return args.reduceRight((res, item)=>{return item(res)}, x)
    }
}
```

es6写法：
```javascript
const compose = (...args) => (x) => args.reduceRight((res, item) => { return item(res) }, x)
```

Redux的中间件就是用compose实现的，webpack中loader的加载顺序也是从右往左，这是因为他也是compose实现的。


## pipe

pipe函数跟compose函数的作用是一样的，也是将参数平铺，只不过他的顺序是从左往右。
只需要将reduceRight改成reduce就行了：

```javascript
const pipe = function () {
    const args = [].slice.apply(arguments);
    return function (x) {
        return args.reduce((res, cb) => cb(res), x);
    }
}
```

es6写法：
```javascript
const pipe = (...args) => x => args.reduce((res, cb) => cb(res), x)
```