import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@/styles/article.css"
import "@/styles/projects.css"
import 'bootstrap/dist/css/bootstrap.min.css';


// 顶级 React 组件，它包装了应用程序中的所有页面。
// https://nextjs.org/docs/advanced-features/custom-app
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
