
import Image from "next/image"
import Link from "next/link"
import { Row, Col, Container } from "react-bootstrap"
export default function Projects() {

    return (
        <div className="projects">
            <Container>

                <div className="info-content">
                    <Row className="row justify-content-center">
                        <Col lg={8}>
                            <Image
                                priority
                                src="/user_1.jpg"
                                className="userImage"
                                height={60}
                                width={60}
                                alt="123"
                            />
                            <div className="gradient-title"><span className="fontw-bold">20</span> in <span className="fontw-bold">1</span> Premium Multipurpose Admin & Dashboard Template</div>
                            <div className="gradient-subTitle">阿娇的个人项目。包含各种类型的应用程序。欢迎沟通指正！ 您可以使用velzon构建任何类型的web应用程序，如电子商务，CRM, CMS，项目管理应用程序，管理面板等。</div>
                        </Col>
                        <Col lg={10}>
                            <div>
                                <ul>
                                    <li>
                                        <Link href="">
                                            <Image
                                                priority
                                                src="/images/projects/reactjs.png"
                                                className="userImage"
                                                height={24}
                                                width={24}
                                                alt="React"
                                            />
                                            <span>React</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <Image
                                                priority
                                                src="/images/projects/nodejs.png"
                                                className="userImage"
                                                height={24}
                                                width={24}
                                                alt="NodeJs"
                                            />
                                            <span>NodeJs</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <Image
                                                priority
                                                src="/images/projects/reactjs.png"
                                                className="userImage"
                                                height={24}
                                                width={24}
                                                alt="React"
                                            />
                                            <span>React</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <Image
                                                priority
                                                src="/images/projects/nodejs.png"
                                                className="userImage"
                                                height={24}
                                                width={24}
                                                alt="NodeJs"
                                            />
                                            <span>NodeJs</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <Image
                                                priority
                                                src="/images/projects/reactjs.png"
                                                className="userImage"
                                                height={24}
                                                width={24}
                                                alt="React"
                                            />
                                            <span>React</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <Image
                                                priority
                                                src="/images/projects/nodejs.png"
                                                className="userImage"
                                                height={24}
                                                width={24}
                                                alt="NodeJs"
                                            />
                                            <span>NodeJs</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>







                </div>
            </Container>

            <div className="web-project">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col lg={8}>
                            <h1>Web Projects</h1>
                            <p>Velzon admin dashboard template built in html language with sass supported using gulp except. We have wrote minimal code to improve the site performance. </p>
                        </Col>
                    </Row>
                    <Row className="row justify-content-center g-4 mt-4">
                        <Col lg={4} sm={6}>
                            <div className="demo-box">
                                <div>
                                    <img src="https://themesbrand.com/velzon/assets/images/demo/default.png"></img>
                                </div>
                            </div>
                            <div className="pt-3">
                                <h6 className="text-uppercase fs-15 fontw-bold color-black">default</h6>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div className="demo-box">
                                <div>
                                    <img src="https://themesbrand.com/velzon/assets/images/demo/default.png"></img>
                                </div>
                            </div>
                            <div className="pt-3">
                                <h6 className="text-uppercase fs-15 fontw-bold color-black">default</h6>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div className="demo-box">
                                <div>
                                    <img src="https://themesbrand.com/velzon/assets/images/demo/default.png"></img>
                                </div>
                            </div>
                            <div className="pt-3">
                                <h6 className="text-uppercase fs-15 fontw-bold color-black">default</h6>
                            </div>
                        </Col>
                    </Row>
                    <Row className="row justify-content-center g-4 mt-4">
                        <Col lg={4} sm={6}>
                            <div className="demo-box">
                                <div>
                                    <img src="https://themesbrand.com/velzon/assets/images/demo/default.png"></img>
                                </div>
                            </div>
                            <div className="pt-3 color-black">
                                <h6 className="text-uppercase fs-15 fontw-bold color-black">default</h6>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div className="demo-box">
                                <div>
                                    <img src="https://themesbrand.com/velzon/assets/images/demo/default.png"></img>
                                </div>
                            </div>
                            <div className="pt-3">
                                <h6 className="text-uppercase fs-15 fontw-bold color-black">default</h6>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div className="demo-box">
                                <div>
                                    <img src="https://themesbrand.com/velzon/assets/images/demo/default.png"></img>
                                </div>
                            </div>
                            <div className="pt-3">
                                <h6 className="text-uppercase fs-15 fontw-bold color-black">default</h6>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}