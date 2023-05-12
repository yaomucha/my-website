import styles from "./Person.module.css"
import Image from "next/image"
import Link from "next/link"

// import Lottie from 'react-lottie';
import * as animationData from '/public/Lotties/email.json'
import { memo } from "react";

export default memo(function Person(props) {

    return (
        <div className={styles.personBox}>
            <span>
                <Image
                    priority
                    src="/user_1.jpg"
                    className={styles.userImage}
                    height={100}
                    width={100}
                    alt="123"
                />
            </span>

            <div className={styles.h3}>yaomucha</div>
            <div className={styles.h5}>Later equal nerve</div>
            <div className={styles.statistics}>
                <div>
                    <div className={styles.h3}>{props.articlesLength}</div>
                    <div>文章</div>
                </div>
                <div>
                    <div className={styles.h3}>{props.categoriesLength}</div>
                    <div>标签</div>
                </div>
            </div>
            <div>
                <Link href="">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-qq"></use>
                    </svg>
                </Link>
                <Link href="https://github.com/yaomucha">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-github"></use>
                    </svg>
                </Link>
                <Link href="">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-weixin"></use>
                    </svg>
                </Link>
                <Link href="">
                    {/* <Lottie options={defaultOptions}
                        height={28}
                        width={28}
                        isStopped={isStopped}
                        isPaused={isPaused} /> */}
                </Link>

            </div>
        </div>
    )
})