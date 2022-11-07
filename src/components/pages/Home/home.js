import React from 'react'
import './home.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Home() {
    return (
        <div className="homepage">
            <div className="home-banner pt-5 pb-5">
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
            </div>
            <div className="meet-pooki white pt-2 pb-2">
                <h1>Meet Pooki</h1>
            </div>
            <div className="why-hello-kid p-5">
                <h1 className="mt-5 mb-5">Tại sao chọn Hello Kid?</h1>
                <Container>
                    <Row>
                        <Col className="reason reason-1 m-1 pt-4 pb-5">
                            <img src="https://color.adobe.com/media/theme/92471.png" alt="BigCo Inc. logo" />
                            <div className="reason-content">
                                <h3>
                                    Lorem ipsum dolor sit amet, consectet adipiscing
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectet adipiscing
                                </p>
                            </div>

                        </Col>
                        <Col className="reason reason-2 m-1 pt-4 pb-5">
                            <img src="https://color.adobe.com/media/theme/92471.png" alt="BigCo Inc. logo" />
                            <div className="reason-content">
                                <h3>
                                    Lorem ipsum dolor sit amet, consectet adipiscing
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectet adipiscing
                                </p>
                            </div>

                        </Col>
                        <Col className="reason reason-3 m-1 pt-4 pb-5">
                            <img src="https://color.adobe.com/media/theme/92471.png" alt="BigCo Inc. logo" />
                            <div className="reason-content">
                                <h3>
                                    Lorem ipsum dolor sit amet, consectet adipiscing
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectet adipiscing
                                </p>
                            </div>

                        </Col>
                        <Col className="reason reason-4 m-1 pt-4 pb-5">
                            <img src="https://color.adobe.com/media/theme/92471.png" alt="BigCo Inc. logo" />
                            <div className="reason-content">
                                <h3>
                                    Lorem ipsum dolor sit amet, consectet adipiscing
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectet adipiscing
                                </p>
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

