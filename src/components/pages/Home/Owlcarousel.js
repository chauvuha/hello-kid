// import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owl.css';

const options = {
    items:2,
    className:"owl-theme",
    loop: true,
    nav: true,
    margin:8,
    responsive: {
        0: {
            items: 3,
        },
        400: {
            items: 3,
        },
        600: {
            items: 3,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 3,

        }
    },
};

export default function Owldemo1() {
    return (
        <div className="hello-kid-benefits-owl-carousel">
            <div class='container-fluid' >
                <div className="row title" style={{ marginBottom: "20px" }} >
                </div>
            </div>
            <div class='container-fluid' >
                <OwlCarousel {...options}
                >
                    <div >
                        <img className="img" src={'assets/img/img1.jpg'} />
                        <h2>
                            Đồ hoạ sinh động, thu hút
                        </h2>
                        <p>
                            Học + chơi trên các đảo giúp bé hứng thú
                        </p>
                    </div>
                    <div >
                        <img className="img" src={'assets/img/img1.jpg'} />
                        <h2>
                            Đồ hoạ sinh động, thu hút
                        </h2>
                        <p>
                            Học + chơi trên các đảo giúp bé hứng thú
                        </p>
                    </div>
                    <div >
                        <img className="img" src={'assets/img/img1.jpg'} />
                        <h2>
                            Đồ hoạ sinh động, thu hút
                        </h2>
                        <p>
                            Học + chơi trên các đảo giúp bé hứng thú
                        </p>
                    </div>
                    <div >
                        <img className="img" src={'assets/img/img1.jpg'} />
                        <h2>
                            Đồ hoạ sinh động, thu hút
                        </h2>
                        <p>
                            Học + chơi trên các đảo giúp bé hứng thú
                        </p>
                    </div>
                    <div >
                        <img className="img" src={'assets/img/img1.jpg'} />
                        <h2>
                            Đồ hoạ sinh động, thu hút
                        </h2>
                        <p>
                            Học + chơi trên các đảo giúp bé hứng thú
                        </p>
                    </div>
                    <div >
                        <img className="img" src={'assets/img/img1.jpg'} />
                        <h2>
                            Đồ hoạ sinh động, thu hút
                        </h2>
                        <p>
                            Học + chơi trên các đảo giúp bé hứng thú
                        </p>
                    </div>
                </OwlCarousel>
            </div>

        </div>

    )


}