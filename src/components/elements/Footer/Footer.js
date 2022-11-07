import './Footer.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Footer() {
    return (
        <div className="footer white pt-5 pb-5 ta-left">
            <Container className="footer-container">
                <Row className="footer-container-row">
                    <Col className="footer-container-row-col footer-col footer-col-1">
                        <h2>
                            Hello Kid
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nisi, viverra ridiculus at quis vulputate semper. </p>
                    </Col>
                    <Col>
                        <h2>
                            Về Hello IELTS
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nisi, viverra ridiculus at quis vulputate semper. Viverra at vivamus quam egestas proin. Vel proin cras eget semper lorem etiam mattis feugiat sit nibh. </p>
                    </Col>
                    <Col>
                        <h2>
                            Sản phẩm
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nisi, viverra ridiculus at quis vulputate semper. Viverra at vivamus quam egestas proin. Vel proin cras eget semper lorem etiam mattis feugiat sit nibh. </p>
                    </Col>
                    <Col>
                        <h2>
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