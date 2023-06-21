import React, { useState, useEffect } from "react";
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts';
import Header from "@/components/Header/Header"
import Person from "@/components/Person/Person"
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'
import { arrayFlat, removeDuplicates, compose } from "../util/index"



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {

  const allCategories = compose(removeDuplicates, arrayFlat)(allPostsData.map(item => { return item.categories }))


  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };


  useEffect(() => {
    var elements = document.getElementsByClassName('txt-rotate');

    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);

  }, [])

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

      <section className='hero-wrap'>
        <div className='overlay'></div>
        <div className='container'>
          <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
            <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center text-box">
              <div className="text text-center">
                <span className="subheading">Hey! I am</span>
                <h1>yaomucha</h1>
                <h2>I'm a<span className="txt-rotate" data-period="2000"
                  data-rotate='[ "Web Designer.", "Developer.", "Photographer.", "Marketer.", "Blogger" ]'>
                </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className='mouse'>
          <a className='mouse-icon' href="#main">
            <div className="mouse-wheel">
              <i className="iconfont icon-todown"></i>
            </div>
          </a>
        </div>
      </section>

      <main className={styles.main} id="main">
        <Person
          articlesLength={allPostsData.length}
          categoriesLength={allCategories.length}
        />
        <div className="pl-[400px]">
          <h2>Recent</h2>
          <ul className={styles.ul}>
            {allPostsData.map(({ id, date, title, preContent, categories }) => (
              <Link href={`/posts/${id}`}>
                <li className={utilStyles.listItem} key={id}>
                  <h3>{title}</h3>
                  <div className={styles.preContent}>
                    {preContent}
                  </div>
                  <ul className={styles.categories}>
                    {
                      categories.map(item => {
                        return <li># {item}</li>
                      })
                    }
                  </ul>
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
