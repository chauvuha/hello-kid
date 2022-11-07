import React from 'react'
import './home.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
    return (
        <div className="homepage">
            <div className="home-banner" >
                <Carousel>
                    <Carousel.Item style={{ backgroundImage: "url(/images/Rectangle7.png)" }} className="pt-5 pb-5">
                        <Container>
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
                        <Container>
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
                        <Container>
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
                        <Container>
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
                <div className="meet-pooki white pt-2 pb-2">
                    <Container>
                        <Row>
                            <h1>Meet Pooki</h1>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="why-hello-kid p-5">
                <Container className="p-5">
                    <Row className="p-5">
                        <div className="why-hello-kid-title">
                            <h1 className="why-hello-kid-title-text pt-2 pb-2" >Khó khăn của phụ huynh khi dạy con học Tiếng Anh?</h1>
                        </div>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className="reason reason-1 m-1 pt-4 pb-5 d-flex flex-column justify-content-between align-items-center">
                            <img src="/images/a1.png" alt="BigCo Inc. logo" />
                            <div className="reason-content">
                                <h3>
                                    Muốn con học giỏi Tiếng Anh nhưng quá nhiều khoá học
                                    Loạn thông tin
                                </h3>
                            </div>

                        </Col>
                        <Col className="reason reason-1 m-1 pt-4 pb-5 d-flex flex-column justify-content-between align-items-center">
                            <img src="/images/a2.png" alt="BigCo Inc. logo" />
                            <div className="reason-content">
                                <h3>
                                    Muốn con học giỏi Tiếng Anh nhưng quá nhiều khoá học
                                    Loạn thông tin
                                </h3>
                            </div>

                        </Col>
                        <Col className="reason reason-1 m-1 pt-4 pb-5 d-flex flex-column justify-content-between align-items-center">
                            <img src="/images/a3.png" alt="BigCo Inc. logo" />
                            <div className="reason-content">
                                <h3>
                                    Muốn con học giỏi Tiếng Anh nhưng quá nhiều khoá học
                                    Loạn thông tin
                                </h3>
                            </div>

                        </Col>
                        <Col className="reason reason-1 m-1 pt-4 pb-5 d-flex flex-column justify-content-between align-items-center">
                            <img src="/images/a4.png" alt="BigCo Inc. logo" />
                            <div className="reason-content">
                                <h3>
                                    Muốn con học giỏi Tiếng Anh nhưng quá nhiều khoá học
                                    Loạn thông tin
                                </h3>
                            </div>

                        </Col>
                    </Row>
                </Container>

            </div>
            <div className="user-feedback p-5">
                <h1 className="green">Người học nói gì về Hello Kid?</h1>
                <Container>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                    </Row>
                </Container>
            </div>
            <div className="register-now p-5 white">
                <h1>Tristique et sit dapibus urna.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suspendisse in aenean ullamcorper porttitor fermentum. Eleifend proin in varius blandit est. Tincidunt orci proin neque.</p>
                <Button className="register-now-button bold"><h2>Đăng ký ngay</h2></Button>
            </div>
        </div>
    )
}

