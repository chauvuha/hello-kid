import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './CarouselBenefits.css';

const options = {
    items: 2,
    className: "owl-theme",
    loop: true,
    nav: true,
    margin: 8,
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

export default function CarouselBenefits() {
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
                        <h2 className="bold">
                            Đồ hoạ sinh động, thu hút
                        </h2>
                        <p>
                            Học + chơi trên các đảo giúp bé hứng thú
                        </p>
                    </div>
                    <div >
                        <img className="img" src={'assets/img/img1.jpg'} />
                        <h2 className="bold">
                            Báo cáo lộ trình đến Phụ huynh sát sao                        </h2>
                        <p>
                            Nắm
                            được con học bao nhiêu giờ, báo cáo kết
                            quả luyện tập                        </p>
                    </div>
                    <div >
                        <img className="img" src={'assets/img/img1.jpg'} />
                        <h2 className="bold">
                            Cá nhân hoá lộ trình người học                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.                         </p>
                    </div>
                    <div >
                        <img className="img" src={'assets/img/img1.jpg'} />
                        <h2 className="bold">
                            Đồ hoạ sinh động, thu hút
                        </h2>
                        <p>
                            Học + chơi trên các đảo giúp bé hứng thú
                        </p>
                    </div>
                    <div >
                        <img className="img" src={'assets/img/img1.jpg'} />
                        <h2 className="bold">
                            Báo cáo lộ trình đến Phụ huynh sát sao                        </h2>
                        <p>
                            Nắm
                            được con học bao nhiêu giờ, báo cáo kết
                            quả luyện tập                        </p>
                    </div>
                    <div >
                        <img className="img" src={'assets/img/img1.jpg'} />
                        <h2 className="bold">
                            Cá nhân hoá lộ trình người học                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.                         </p>
                    </div>
                </OwlCarousel>
            </div>

        </div>

    )


}