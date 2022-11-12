import React from 'react'
import './home.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import CarouselBenefits from './CarouselBenefits';




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
                                        <h1 className="yellow fw-600">
                                            Ứng dung học Tiếng Anh cho bé từ 6 - 11 tuổi
                                        </h1>
                                    </div>
                                    <div className="home-banner-description white">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis dignissim nisl magnis quam sed blandit nisl. Mauris quam gravida amet, ipsum sed sed.
                                        </p>
                                    </div>
                                    <div className="home-banner-button-holder">
                                        <Button className="home-banner-button"><h2 className="fw-600">Đăng ký ngay</h2></Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="home-banner-video">
                                        {/* Video */}
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Color-white.JPG" alt="white" />
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
                                        <h1 className="yellow fw-600">
                                            Ứng dung học Tiếng Anh cho bé từ 6 - 11 tuổi
                                        </h1>
                                    </div>
                                    <div className="home-banner-description white">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis dignissim nisl magnis quam sed blandit nisl. Mauris quam gravida amet, ipsum sed sed.
                                        </p>
                                    </div>
                                    <div className="home-banner-button-holder">
                                        <Button className="home-banner-button"><h2 className="fw-600">Đăng ký ngay</h2></Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="home-banner-video">
                                        {/* Video */}
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Color-white.JPG" alt="white" />
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
                                        <h1 className="yellow fw-600">
                                            Ứng dung học Tiếng Anh cho bé từ 6 - 11 tuổi
                                        </h1>
                                    </div>
                                    <div className="home-banner-description white">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis dignissim nisl magnis quam sed blandit nisl. Mauris quam gravida amet, ipsum sed sed.
                                        </p>
                                    </div>
                                    <div className="home-banner-button-holder">
                                        <Button className="home-banner-button"><h2 className="fw-600">Đăng ký ngay</h2></Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="home-banner-video">
                                        {/* Video */}
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Color-white.JPG" alt="white" />
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
                                        <h1 className="yellow fw-600">
                                            Ứng dung học Tiếng Anh cho bé từ 6 - 11 tuổi
                                        </h1>
                                    </div>
                                    <div className="home-banner-description white">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis dignissim nisl magnis quam sed blandit nisl. Mauris quam gravida amet, ipsum sed sed.
                                        </p>
                                    </div>
                                    <div className="home-banner-button-holder">
                                        <Button className="home-banner-button"><h2 className="fw-600">Đăng ký ngay</h2></Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="home-banner-video">
                                        {/* Video */}
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Color-white.JPG" alt="white" />
                                    </div>
                                </Col>

                            </Row>
                        </Container>

                    </Carousel.Item>

                </Carousel>
            </div>
            <div className="meet-pookie-box">
                <div className="pooki">
                    <img src='images/pooki.png' alt="pooki" />
                </div>
                <div className="meet-pooki white pt-4 pb-4">
                    <Container>
                        <Row>
                            <h1 className="fw-600"><img className="arrow" src='images/arrowvecto.png' alt="arrow" />
                                Meet <span className="yellow"> <u> Pooki </u></span> </h1>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="why-hello-kid p-5">
                <Container className="p-5">
                    <Row className="pt-5">
                        <div className="why-hello-kid-title">
                            <h1 className="why-hello-kid-title-text pt-2 pb-2 fw-600" >Khó khăn của phụ huynh khi dạy con học Tiếng Anh?</h1>
                        </div>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className="reason reason-1 m-1 pt-4 pb-5">
                            <img src="/images/a1.png" alt="a1" />
                            <div className="reason-content fw-400">
                                <h3>
                                    Muốn con học giỏi Tiếng Anh nhưng quá nhiều khoá học.
                                    <span className="orange">Loạn thông tin</span>
                                </h3>
                            </div>

                        </Col>
                        <Col className="reason reason-1 m-1 pt-4 pb-5">
                            <img src="/images/a2.png" alt="a2" />
                            <div className="reason-content fw-400">
                                <h3>
                                    Học 1-1 tốn kém.
                                    Không chủ động về thời gian.
                                    <span className="green"> Con chán</span>
                                </h3>
                            </div>

                        </Col>
                        <Col className="reason reason-1 m-1 pt-4 pb-5">
                            <img src="/images/a3.png" alt="a3" />
                            <div className="reason-content fw-400">
                                <h3>
                                    Phụ huynh <span className="blue">không biết Tiếng Anh</span> nên không theo sát kèm cặp hỗ trợ được con
                                </h3>
                            </div>

                        </Col>
                        <Col className="reason reason-1 m-1 pt-4 pb-5">
                            <img src="/images/a4.png" alt="2-in-1" />
                            <div className="reason-content fw-400">
                                <h3>
                                    Không có khoá học nào <span className="orange">2 in 1</span>: Vừa theo được khung BGD, vừa luyện thi chứng chỉ quốc tế
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="hello-kid-benefits pb-5">
                <Container className="hello-kid-benefits-caroursel-holder d-flex flex-column align-items-center">
                    <h1 className="fw-600">
                        Việc gì khó, có Hello
                    </h1>
                    <Container className="p-5">
                        <CarouselBenefits />
                    </Container>
                </Container>
                <div className="hello-kid-benefits-green-banner pt-5">
                    <img src="/images/group14.png" alt="group14" />
                </div>
            </div>
            <div className="hello-kid-benefits-map">
                <img className="hello-kid-benefits-map-background" src="/images/group8.png" alt="group8" />
                <Container className="hello-kid-benefits-map-components">
                    <Row className="d-flex flex-row justify-content-center">
                        <img className="hello-kid-benefits-map-board" src="/images/group17.png" alt="group17" />
                        <img className="hello-kid-benefits-map-pooki" src="/images/group6.png" alt="group6" />
                    </Row>
                </Container>
            </div>
            <div className="hello-kid-benefits-pathway  p-5" style={{ backgroundImage: "url(/images/xanh.png)" }}>
                <img className="hello-kid-benefit-pathway-img p-5" alt="pathway" src="/images/Group26.png" />

            </div>
            <div className="hello-kid-levels p-5">
                <Container>
                    <h2 className="hello-kid-levels-title white bold pb-5">LỘ TRÌNH CHUẨN THEO KHUNG BỘ GIÁO DỤC</h2>
                    <Row>
                        <Col>
                            <div className="hello-kid-levels level d-flex flex-column">
                                <img className="hello-kid-levels-star" src="/images/star1.png" alt="star1" />
                                <div className="hello-kid-levels-star-text-box">
                                    <Button className="button-level button-level-1 mt-4 mb-4"><h2 className="fw-600">STARTER</h2></Button>
                                    <p className="level-text white">
                                        DÀNH CHO CÁC BẠN
                                        TỪ 6-8 TUỔI (PRE A1)
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="hello-kid-levels level d-flex flex-column">
                                <img className="hello-kid-levels-star" src="/images/star2.png" alt="star2" />
                                <div className="hello-kid-levels-star-text-box">
                                    <Button className="button-level button-level-2 mt-4 mb-4"><h2 className="fw-600">MOVER</h2></Button>
                                    <p className="level-text white">
                                        DÀNH CHO CÁC BẠN
                                        TỪ 6-8 TUỔI (PRE A1)
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="hello-kid-levels level d-flex flex-column">
                                <img className="hello-kid-levels-star" src="/images/star3.png" alt="star3" />
                                <div className="hello-kid-levels-star-text-box">
                                    <Button className="button-level button-level-3 mt-4 mb-4"><h2 className="fw-600">FLYER</h2></Button>
                                    <p className="level-text white">
                                        DÀNH CHO CÁC BẠN
                                        TỪ 6-8 TUỔI (PRE A1)
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="hello-kid-levels level d-flex flex-column">
                                <img className="hello-kid-levels-star" src="/images/star4.png" alt="star4" />
                                <div className="hello-kid-levels-star-text-box">
                                    <Button className="button-level button-level-4 mt-4 mb-4"><h2 className="fw-600">TOEFL Primary</h2></Button>
                                    <p className="level-text white">
                                        DÀNH CHO CÁC BẠN
                                        TỪ 6-8 TUỔI (PRE A1)
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="hello-kid-package-price p-5 d-flex flex-column align-items-center">
                <h1 className="hello-kid-package-price title white fw-600">GÓI LUYỆN THI HẤP DẪN</h1>
                <h4 className="hello-kid-package-price clock white p-2 mb-4 fw-600">
                    <img src="/images/Group36.png" className="me-3" alt="group36" />
                    23 giờ    01 phút    02 giây</h4>
                <Container>
                    <Row>
                        <Col className="hello-kid-package-price package package-1 pt-5 m-2">
                            <h3>1 năm</h3>
                            <h1 className="bold">490.000đ</h1>
                            <h4 className="light-black"><s>1.380.000 đ</s></h4>
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
                            <h4 className="light-black"><s>1.380.000 đ</s></h4>
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
                            <h4 className="light-black"><s>1.380.000 đ</s></h4>
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
                <h1 className="green fw-600">Người học nói gì về Hello Kid?</h1>
                <div className="user-feedback-content d-flex flex-row p-5">
                    <div className="hello-kid-fb-photo1">
                        <img className="hello-kid-fb-photo1" src="/images/Rectangle29.png" alt="rec29" />
                    </div>
                    <div className="hello-kid-fb-text1-container" style={{ backgroundImage: "url(/images/Union.png)" }}>
                        <div className="hello-kid-fb-text1-content d-flex flex-column justify-content-between">
                            <p className="p-5 ms-5 ta-left">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, quisque eu placerat cras et cras convallis sed hac. “
                            </p>
                            <p className="author ps-5 pe-5 pt-3 ta-right light-black">
                                -Ms. Hannah
                            </p>
                        </div>
                    </div>
                    <div className="hello-kid-fb-video1">
                        <img className="hello-kid-fb-video1 ms-2" src="/images/Rectangle28.png" alt="rec28" />
                    </div>
                </div>
                <div className="user-feedback-content user-feedback-content-row2 d-flex flex-row ps-5 pe-5">
                    <div className="hello-kid-fb-photo1">
                        <img className="hello-kid-fb-photo1" src="/images/Rectangle35.png" alt="rec35" />
                    </div>
                    <div className="hello-kid-fb-text1-container" style={{ backgroundImage: "url(/images/Union.png)" }}>
                        <div className="hello-kid-fb-text1-content d-flex flex-column justify-content-between">
                            <p className="ps-5 pe-3 pt-3 ta-left">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
                            </p>
                            <p className="author ps-5 pe-5 pt-3 ta-right light-black">
                                Jackson - 7 yo
                            </p>
                        </div>
                    </div>
                    <div className="hello-kid-fb-photo1">
                        <img className="hello-kid-fb-photo1" src="/images/Rectangle36.png" alt="rec36" />
                    </div>
                    <div className="hello-kid-fb-text1-container" style={{ backgroundImage: "url(/images/Union.png)" }}>
                        <div className="hello-kid-fb-text1-content d-flex flex-column justify-content-between">
                            <p className="ps-5 pe-3 pt-3 ta-left">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
                            </p>
                            <p className="author ps-5 pe-5 pt-3 ta-right light-black">
                                Karen - 6 yo
                            </p>
                        </div>
                    </div>
                    <div className="hello-kid-fb-photo1">
                        <img className="hello-kid-fb-photo1" src="/images/Rectangle37.png" alt="rec37" />
                    </div>
                    <div className="hello-kid-fb-text1-container" style={{ backgroundImage: "url(/images/Union.png)" }}>
                        <div className="hello-kid-fb-text1-content d-flex flex-column justify-content-between">
                            <p className="ps-5 pe-3 pt-3 ta-left">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
                            </p>
                            <p className="author ps-5 pe-5 pt-3 ta-right light-black">
                                Kevin - 8 yo
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

