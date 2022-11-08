import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

export default function Header() {
    return (
        <div className="header-container">
            <Navbar id="navbar" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Hello Kid</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/product">Về sản phẩm</Nav.Link>
                            <Nav.Link href="/aboutus">Về chúng tôi</Nav.Link>
                            <Nav.Link href="/news">Tin tức</Nav.Link>
                            <Button className="sign-in-button">Đăng nhập</Button>
                            <Button className="sign-up-button">Đăng ký</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}