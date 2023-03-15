import '@/styles/globals.css'
import type { AppProps } from 'next/app'


// 顶级 React 组件，它包装了应用程序中的所有页面。
// https://nextjs.org/docs/advanced-features/custom-app
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
