---
title: 'react context'
preContent: 'react hooks context'
date: '2023-05-11'
categories: ['react', 'react-hooks']
---


### createContext

>createContext 能让你创建一个 context 以便组件能够提供和读取。
```javascript
import { createContext } from 'react';

const ThemeContext = createContext('light');
```

- 参数 
  1. `defaultValue：`当包裹需要读取上下文的组件树中没有匹配的上下文时，你可以用该值作上下文的。倘若你没有任何有意义的默认值，可指定其为 null。该默认值是用于作为”最后的手段“的备选值。它是静态的，永远不会随时间改变。
- 返回值 
   `createContext` 返回一个 context 对象。

    **该 context 对象本身不包含任何信息。** 它只表示其他组件读取或提供的 那个 context。一般来说，你将在组件上方使用 `SomeContext.Provider` 来指定 context 的值，并在被包裹的下方组件内调用 `useContext(SomeContext)` 来读取它。context 对象有一些属性：

    - SomeContext.Provider 让你为被它包裹的组件提供上下文的值。
    - SomeContext.Consumer 是一个很少会用到的备选方案，它用于读取上下文的值。


```javascript
function App() {
  const [theme, setTheme] = useState('light');
  // ...
  return (
    <ThemeContext.Provider value={theme}>
      <Page />
    </ThemeContext.Provider>
  );
}
```
- Props 
    `value：`该值为你想传递给所有处于这个 provider 内读取该 context 的组件，**无论它们处于多深的层级。** context 的值可以为任何类型。该 provider 内的组件可通过调用 `useContext(SomeContext) `来获取它**上面最近的** context provider 的 value。



### useContext

>读取和订阅组件中的context

```const value = useContext(someContext)```


### e

>需求：一键切换主题颜色


```javascript
import { useContext } from "react"
import { createContext } from "react"
import "./index.css"
import { useState } from "react"

const HomeContext = createContext("dark")

const Home = () => {

    const [theme, setTheme] = useState("light")
    return (
        <HomeContext.Provider value={{ theme, setTheme }}>
            <Content />
        </HomeContext.Provider>
    )
}

const Content = () => {
    const { theme, setTheme } = useContext(HomeContext)
    return (
        <div className={theme}>
            <h1>title</h1>
            <button onClick={() => {
                setTheme("light")
            }}>light</button>
            <button onClick={() => {
                setTheme("dark")
            }}>dark</button>
        </div>
    )
}
```

```css
.light{
    background-color: white;
    color: black;
    transition: all 0.3s;
}

.dark{
    background-color: black;
    color: white;
    transition: all 0.3s;
}
```


123