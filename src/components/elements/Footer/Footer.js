import './Footer.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    return (
        <div className="footer white pt-5 pb-5 ta-left">
            <Container className="footer-container">
                <Row className="footer-container-row">
                    <Col className="footer-container-row-col footer-col footer-col-1">
                        <h2 className="fw-600">
                        <img className="footer-logo me-2" src="/images/Rectangle40.png" alt="logo" />
                            Hello Kid
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nisi, viverra ridiculus at quis vulputate semper. </p>
                        <FontAwesomeIcon icon={faFacebookSquare} className="footer-icon me-2 mt-2" size="2x" />
                        <FontAwesomeIcon icon={faTwitterSquare} className="footer-icon me-2 mt-2" size="2x" />
                        <FontAwesomeIcon icon={faYoutubeSquare} className="footer-icon me-2 mt-2" size="2x" />
                    </Col>
                    <Col>

                        <h2 className="fw-600">
                            Về Hello IELTS
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nisi, viverra ridiculus at quis vulputate semper. Viverra at vivamus quam egestas proin. Vel proin cras eget semper lorem etiam mattis feugiat sit nibh. </p>
                    </Col>
                    <Col>
                        <h2 className="fw-600">
                            Sản phẩm
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nisi, viverra ridiculus at quis vulputate semper. Viverra at vivamus quam egestas proin. Vel proin cras eget semper lorem etiam mattis feugiat sit nibh. </p>
                    </Col>
                    <Col>
                        <h2 className="fw-600">
                            Về Hello IELTS
                        </h2>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nisi, viverra ridiculus at quis vulputate semper. Viverra at vivamus quam egestas proin. Vel proin cras eget semper lorem etiam mattis feugiat sit nibh. </p>
                        <p>
                            Copyright @ Hello IELTS 2022
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}