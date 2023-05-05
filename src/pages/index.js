import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts';
import Header from "@/components/Header/Header"
import Person from "@/components/Person/Person"
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>yaomucha</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href='/iconfont/iconfont.css' />
        <link rel="preconnect" href="https://your-font-file-host/" />
        <link rel="stylesheet" href="https://your-font-file-host/inter.css"></link>

        <script src='/iconfont/iconfont.js' ></script>
      </Head>
      <Header />
      <main className={styles.main}>
        <Person />
        <div className={styles.content}>
          <h2>Recent</h2>
          <ul className={styles.ul}>
            {allPostsData.map(({ id, date, title, preContent }) => (
              <Link href={`/posts/${id}`}>
                <li className={utilStyles.listItem} key={id}>
                  <h3>{title}</h3>
                  <div className={styles.preContent}>
                    {preContent}
                  </div>
                  <small className={utilStyles.lightText}>
                    {date}
                  </small>
                </li>
              </Link>
            ))}
          </ul>
        </div>

      </main>
    </>
  )
}
