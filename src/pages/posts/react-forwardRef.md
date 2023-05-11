---
title: 'react forwardRef'
preContent: 'react api forwardRef'
date: '2023-05-11'
categories: ['react', 'react-api']
---

>lets your component expose a DOM node to parent component with a ref.

``` javascript
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  // ...
});
```

>需求：edit聚焦input

```javascript
import { useRef } from "react"
import { forwardRef } from "react"

export default function Home() {
    const input = useRef(null)
    return (
        <div>
            <span>enter your name</span>
            <Input ref={input} />
            <button onClick={() => {
                input.current.focus()
            }}>edit</button>
        </div>
    )
}

const Input = forwardRef((props, ref) => {
    return (
        <>
            <input ref={ref} />
        </>

    )
})
```