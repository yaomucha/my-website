import styles from "./Person.module.css"
import Image from "next/image"
import Link from "next/link"


export default function Header() {
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
                    <div className={styles.h3}>7</div>
                    <div>文章</div>
                </div>
                <div>
                    <div className={styles.h3}>7</div>
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
            </div>
        </div>
    )
}