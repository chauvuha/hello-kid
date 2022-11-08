import React from 'react'
import './home.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Owldemo1 from './Owlcarousel'



export default function Home() {
    return (
        <div className="homepage">
            <div className="home-banner">
                <Carousel>
                    <Carousel.Item style={{ backgroundImage: "url(/images/Rectangle7.png)" }} className="pt-5 pb-5">
                        <Container className="p-5">
                            <Row>
                                <Col>
                                    <div className="home-banner-header">
                                        <h1 className="yellow">
                                            Ứng dung học Tiếng Anh cho bé từ 6 - 11 tuổi
                                        </h1>
                                    </div>
                                    <div className="home-banner-description white">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis dignissim nisl magnis quam sed blandit nisl. Mauris quam gravida amet, ipsum sed sed.
                                        </p>
                                    </div>
                                    <div className="home-banner-button-holder">
                                        <Button className="home-banner-button bold"><h2>Đăng ký ngay</h2></Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="home-banner-video">
                                        {/* Video */}
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Color-white.JPG" alt="BigCo Inc. logo" />
                                    </div>
                                </Col>

                            </Row>
                        </Container>

                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundImage: "url(/images/Rectangle7.png)" }} className="pt-5 pb-5">
                        <Container className="p-5">
                            <Row>
                                <Col>
                                    <div className="home-banner-header">
                                        <h1 className="yellow">
                                            Ứng dung học Tiếng Anh cho bé từ 6 - 11 tuổi
                                        </h1>
                                    </div>
                                    <div className="home-banner-description white">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis dignissim nisl magnis quam sed blandit nisl. Mauris quam gravida amet, ipsum sed sed.
                                        </p>
                                    </div>
                                    <div className="home-banner-button-holder">
                                        <Button className="home-banner-button bold"><h2>Đăng ký ngay</h2></Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="home-banner-video">
                                        {/* Video */}
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Color-white.JPG" alt="BigCo Inc. logo" />
                                    </div>
                                </Col>

                            </Row>
                        </Container>

                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundImage: "url(/images/Rectangle7.png)" }} className="pt-5 pb-5">
                        <Container className="p-5">
                            <Row>
                                <Col>
                                    <div className="home-banner-header">
                                        <h1 className="yellow">
                                            Ứng dung học Tiếng Anh cho bé từ 6 - 11 tuổi
                                        </h1>
                                    </div>
                                    <div className="home-banner-description white">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis dignissim nisl magnis quam sed blandit nisl. Mauris quam gravida amet, ipsum sed sed.
                                        </p>
                                    </div>
                                    <div className="home-banner-button-holder">
                                        <Button className="home-banner-button bold"><h2>Đăng ký ngay</h2></Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="home-banner-video">
                                        {/* Video */}
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Color-white.JPG" alt="BigCo Inc. logo" />
                                    </div>
                                </Col>

                            </Row>
                        </Container>

                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundImage: "url(/images/Rectangle7.png)" }} className="pt-5 pb-5">
                        <Container className="p-5">
                            <Row>
                                <Col>
                                    <div className="home-banner-header">
                                        <h1 className="yellow">
                                            Ứng dung học Tiếng Anh cho bé từ 6 - 11 tuổi
                                        </h1>
                                    </div>
                                    <div className="home-banner-description white">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis dignissim nisl magnis quam sed blandit nisl. Mauris quam gravida amet, ipsum sed sed.
                                        </p>
                                    </div>
                                    <div className="home-banner-button-holder">
                                        <Button className="home-banner-button bold"><h2>Đăng ký ngay</h2></Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="home-banner-video">
                                        {/* Video */}
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Color-white.JPG" alt="BigCo Inc. logo" />
                                    </div>
                                </Col>

                            </Row>
                        </Container>

                    </Carousel.Item>

                </Carousel>
            </div>
            <div className="meet-pookie-box">
                <div className="pooki">
                    <img src='images/pooki.png' />
                </div>
                <div className="meet-pooki white pt-4 pb-4">
                    <Container>
                        <Row>
                            <h1>Meet Pooki</h1>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="why-hello-kid p-5">
                <Container className="p-5">
                    <Row className="pt-5">
                        <div className="why-hello-kid-title">
                            <h1 className="why-hello-kid-title-text pt-2 pb-2" >Khó khăn của phụ huynh khi dạy con học Tiếng Anh?</h1>
                        </div>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className="reason reason-1 m-1 pt-4 pb-5">
                            <img src="/images/a1.png" alt="BigCo Inc. logo" />
                            <div className="reason-content">
                                <h3>
                                    Muốn con học giỏi Tiếng Anh nhưng quá nhiều khoá học
                                    Loạn thông tin
                                </h3>
                            </div>

                        </Col>
                        <Col className="reason reason-1 m-1 pt-4 pb-5">
                            <img src="/images/a2.png" alt="BigCo Inc. logo" />
                            <div className="reason-content">
                                <h3>
                                    Học 1-1 tốn kém.
                                    Không chủ động về thời gian.
                                    Con chán
                                </h3>
                            </div>

                        </Col>
                        <Col className="reason reason-1 m-1 pt-4 pb-5">
                            <img src="/images/a3.png" alt="BigCo Inc. logo" />
                            <div className="reason-content">
                                <h3>
                                    Phụ huynh không biết Tiếng Anh nên không theo sát kèm cặp hỗ trợ được con
                                </h3>
                            </div>

                        </Col>
                        <Col className="reason reason-1 m-1 pt-4 pb-5">
                            <img src="/images/a4.png" alt="BigCo Inc. logo" />
                            <div className="reason-content">
                                <h3>
                                    Không có khoá học nào 2 in 1 : Vừa theo được khung BGD, vừa luyện thi chứng chỉ quốc tế
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="hello-kid-benefits pb-5">
                <Container className="hello-kid-benefits-caroursel-holder d-flex flex-column align-items-center">
                    <h1>
                        Việc gì khó, có Hello
                    </h1>
                    <Container className="p-5">
                        <Owldemo1 />
                    </Container>
                </Container>
                <div className="hello-kid-benefits-green-banner pt-5">
                    <img src="/images/group14.png" />
                </div>
            </div>
            <div className="hello-kid-benefits-map">
                <img className="hello-kid-benefits-map-background" src="/images/group8.png" />
                <Container className="hello-kid-benefits-map-components">
                    <Row className="d-flex flex-row justify-content-center">
                        <img className="hello-kid-benefits-map-board" src="/images/group17.png" />
                        <img className="hello-kid-benefits-map-pooki" src="/images/group6.png" />
                    </Row>
                </Container>
            </div>
            <div className="hello-kid-benefits-pathway  p-5" style={{ backgroundImage: "url(/images/xanh.png)" }}>
                <img className="hello-kid-benefit-pathway-img p-5" src="/images/Group26.png" />

            </div>
            <div className="hello-kid-levels p-5">
                <Container>
                    <Row>
                        <Col>
                            <img className="hello-kid-levels-star" src="/images/star1.png" />
                            <Button className="button-level-1 mt-4 mb-4"><h2>STARTER</h2></Button>
                            <p className="white">
                                DÀNH CHO CÁC BẠN
                                TỪ 6-8 TUỔI (PRE A1)
                            </p>
                        </Col>
                        <Col>
                            <img className="hello-kid-levels-star" src="/images/star1.png" />
                            <Button className="button-level-1 mt-4 mb-4"><h2>STARTER</h2></Button>
                            <p className="white">
                                DÀNH CHO CÁC BẠN
                                TỪ 6-8 TUỔI (PRE A1)
                            </p>
                        </Col>
                        <Col>
                            <img className="hello-kid-levels-star" src="/images/star1.png" />
                            <Button className="button-level-1 mt-4 mb-4"><h2>STARTER</h2></Button>
                            <p className="white">
                                DÀNH CHO CÁC BẠN
                                TỪ 6-8 TUỔI (PRE A1)
                            </p>
                        </Col>
                        <Col>
                            <img className="hello-kid-levels-star" src="/images/star1.png" />
                            <Button className="button-level-1 mt-4 mb-4"><h2>STARTER</h2></Button>
                            <p className="white">
                                DÀNH CHO CÁC BẠN
                                TỪ 6-8 TUỔI (PRE A1)
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="hello-kid-package-price p-5 d-flex flex-column align-items-center">
                <h1 className="hello-kid-package-price title white">GÓI LUYỆN THI HẤP DẪN</h1>
                <h4 className="hello-kid-package-price clock white p-2 mb-4">23 giờ    01 phút    02 giây</h4>
                <Container>
                    <Row>
                        <Col className="hello-kid-package-price package package-1 pt-5 m-2">
                            <h3>1 năm</h3>
                            <h1 className="bold">490.000đ</h1>
                            <h4><s>1.380.000 đ</s></h4>
                            <ul className="ta-left">
                                <li>Không giới hạn đề thi</li>
                                <li>Tự động cập nhật tính năng và đề thi</li>
                                <li>Miễn phí bộ tài liệu độc quyền</li>
                            </ul>
                            <Button className="button-package mt-4 mb-4"><h4>Đăng ký ngay</h4></Button>
                        </Col>
                        <Col className="hello-kid-package-price package package-active package-2 pt-5 m-2">
                            <div className="hello-kid-package-price fav-banner bold d-flex flex-column align-items-center">
                                <p>Được yêu thích nhất</p>
                            </div>
                            <h3>1 năm</h3>
                            <h1 className="bold">490.000đ</h1>
                            <h4><s>1.380.000 đ</s></h4>
                            <ul className="ta-left">
                                <li>Không giới hạn đề thi</li>
                                <li>Tự động cập nhật tính năng và đề thi</li>
                                <li>Miễn phí bộ tài liệu độc quyền</li>
                            </ul>
                            <Button className="button-package mt-4 mb-4"><h4>Đăng ký ngay</h4></Button>
                        </Col>
                        <Col className="hello-kid-package-price package package-3 pt-5 m-2">
                            <h3>1 năm</h3>
                            <h1 className="bold">490.000đ</h1>
                            <h4><s>1.380.000 đ</s></h4>
                            <ul className="ta-left">
                                <li>Không giới hạn đề thi</li>
                                <li>Tự động cập nhật tính năng và đề thi</li>
                                <li>Miễn phí bộ tài liệu độc quyền</li>
                            </ul>
                            <Button className="button-package mt-4 mb-4"><h4>Đăng ký ngay</h4></Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="user-feedback p-5">
                <h1 className="green">Người học nói gì về Hello Kid?</h1>
                <div className="user-feedback-content d-flex flex-row p-5">

                    <img className="hello-kid-fb-photo1 ms-3" src="/images/Rectangle29.png" />
                    <div className="hello-kid-fb-text1-container">
                        <img className="hello-kid-fb-text1" src="/images/Union.png" />
                        <div className="hello-kid-fb-text1-content d-flex flex-column justify-content-between">
                            <p className="ps-5 pe-5 pt-3 ta-left">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, quisque eu placerat cras et cras convallis sed hac. “
                            </p>
                            <p className="author ps-5 pe-5 pt-3 ta-right">
                                -Ms. Hannah
                            </p>
                        </div>

                    </div>
                    <img className="hello-kid-fb-video1 ms-2" src="/images/Rectangle28.png" />
                </div>
            </div>
            <div className="register-now p-5 white">
                <h1>Tristique et sit dapibus urna.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suspendisse in aenean ullamcorper porttitor fermentum. Eleifend proin in varius blandit est. Tincidunt orci proin neque.</p>
                <Button className="register-now-button bold"><h2>Đăng ký ngay</h2></Button>
            </div>
        </div>
    )
}

