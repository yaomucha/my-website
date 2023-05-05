
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import React from 'react';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';




export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <article className='py-8 prose  prose-h1:mt-8'>
          <MDXRemote {...postData.contentHtml} />
        </article>
        
        <div className='navigation-box'>
          <h2>目录</h2>
          <MarkNav
          className="article-menu"
          source={postData.fileContents}
          headingTopOffset={80}
        />
        </div>
        
      </article>

    </Layout>
  );
}