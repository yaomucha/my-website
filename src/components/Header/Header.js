import styles from "./Header.module.css"
import Image from "next/image"
import Link from "next/link"


export default function Header() {
    return (
        <div className={styles.navBar}>
            <span>
                <Image
                    priority
                    src="/images/user/user_1.jpg"
                    className={styles.userImage}
                    height={60}
                    width={60}
                    alt="123"
                />
            </span>
            <div>
                <Link href="">Home</Link>
                <Link href="">随记</Link>
                <Link href="/projects">项目</Link>
                <Link href="">工具库</Link>
            </div>
        </div>
    )
}