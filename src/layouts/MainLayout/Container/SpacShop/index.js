import { useEffect, useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import spaceShop1 from '~/assets/img/space_shop/Rectangle46.png';
import spaceShop2 from '~/assets/img/space_shop/Rectangle47.png';
import spaceShop3 from '~/assets/img/space_shop/Rectangle48.jpg';
import spaceShop4 from '~/assets/img/space_shop/Rectangle49.jpg';
import spaceShop5 from '~/assets/img/space_shop/Rectangle50.jpg';

function SpacShop(props) {
    // const images = require.context('~/assets/img/space_shop', true);
    // console.log(images);

    // const next = () => {
    //     currentSlide = (currentSlide + 1) % slides.length;
    //     $('.img__space.active').classList.remove('active');
    //     slides[currentSlide].classList.add('active');
    // }

    // const prev = () => {
    //     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    //     $('.img__space.active').classList.remove('active');
    //     slides[currentSlide].classList.add('active');

    // }
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(true);

    let currentSlide = 0;
    const slides = document.querySelectorAll('.img__space');

    useEffect(() => {
        const slideInterval = setInterval(handleNext, 3000);

        const onScroll = () => {
            const animateItems = document.querySelectorAll('.animate-item');
            animateItems.forEach((item) => {
                const itemTop = item.getBoundingClientRect().top;
                if (itemTop < window.innerHeight * 0.8) {
                    setShow(true);
                } else {
                    setShow(false);
                }
            });
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            clearInterval(slideInterval);
        };
    }, []);

    const handleNext = () => {
        currentSlide = (currentSlide + 1) % slides.length;

        console.log(currentSlide);
        // slides.classList.contains('active').classList.remove('active');
        // slides[currentSlide].classList.add('active');
    };

    return (
        <section className="space__shop-section">
            <div className="space__shop-container">
                <div className="grid wide">
                    <div className="row">
                        <div className={'space__shop-content col l-6 animate-item animate-item__left' + show}>
                            <div className="space__shop-content-title">về không gian</div>
                            <div className="space__shop-content-decs">
                                Không gian của LANGTHANG COFFEE được thiết kế với tông màu vàng ấm áp và thoải mái. Đồ
                                nội thất được bố trí thông minh và tinh tế để mang lại sự thoải mái cho khách hàng. Bức
                                tranh nghệ thuật treo trên tường cùng với đèn lồng pha lê tạo ra một không gian sang
                                trọng và quyến rũ. Bạn có thể ngồi ở các góc ngồi riêng tư hoặc các bàn đơn tùy theo sở
                                thích của mình. LANGTHANG COFFEE sẽ là một nơi lý tưởng để bạn tìm kiếm sự yên bình và
                                thư giãn.
                            </div>
                            <img src="images/Rectangle55.jpg" width="100" alt="hinh" />
                        </div>
                        <div className={'space__shop-img col l-6 animate-item animate-item__right' + show}>
                            <div className="box__img">
                                <img src={spaceShop1} alt="" className="img__space active" />
                                <img src={spaceShop2} alt="" className="img__space" />
                                <img src={spaceShop3} alt="" className="img__space" />
                                <img src={spaceShop4} alt="" className="img__space" />
                                <img src={spaceShop5} alt="" className="img__space" />
                                {/* {images.keys().map((image, index) => (
                                    <img key={index} src={images(image)} alt={`${index}`} />
                                ))} */}
                            </div>
                            <div className="icon__next" onClick={() => handleNext()}>
                                {/*onClick next*/}
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                            <div className="icon__prev">
                                {/*onClick prev*/}
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </div>
                            <div className="list__dot">
                                <div className="item__dot"></div>
                                <div className="item__dot"></div>
                                <div className="item__dot"></div>
                                <div className="item__dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SpacShop;
