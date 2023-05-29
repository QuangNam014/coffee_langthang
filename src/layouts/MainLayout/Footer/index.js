import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';

function Footer(props) {
    return (
        <Fragment>
            <footer>
                <div className="grid wide">
                    <div className="container">
                        <div className="footer__container">
                            <ul className="list__info-footer">
                                <li className="info__footer">
                                    <div className="info__footer-title">Thông tin liên hệ</div>

                                    <div className="info__footer-content">
                                        <div className="info__footer-content-location">
                                            <h5 className="location__name">
                                                <FontAwesomeIcon icon={faLocationDot} /> hồ chí minh
                                            </h5>
                                            <p className="location__decs">
                                                391A Đ. Nam Kỳ Khởi Nghĩa, Phường 14, Quận 3
                                            </p>
                                        </div>

                                        <div className="info__footer-content-gmail">
                                            <h5 className="gmail-name">
                                                <FontAwesomeIcon icon={faEnvelope} /> gmail
                                            </h5>

                                            <p className="gmail-decs">Thelangthang96@gmail.com</p>
                                        </div>

                                        <ul className="list__icon-contact">
                                            <li className="icon__contact">
                                                <FontAwesomeIcon icon={faFacebook} />
                                            </li>

                                            <li className="icon__contact">
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </li>

                                            <li className="icon__contact">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="info__footer">
                                    <div className="info__footer-title">Sản phẩm</div>

                                    <div className="info__footer-content">
                                        <ul className="list__info">
                                            <li className="item__info">cà phê</li>
                                            <li className="item__info">sữa tươi</li>
                                            <li className="item__info">trà sữa</li>
                                            <li className="item__info">soda</li>
                                            <li className="item__info">bánh ngọt</li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="info__footer">
                                    <div className="info__footer-title">Giúp đỡ</div>

                                    <div className="info__footer-content">
                                        <ul className="list__info">
                                            <li className="item__info">tìm kiếm</li>
                                            <li className="item__info">giới thiệu</li>
                                            <li className="item__info">tuyển dụng</li>
                                            <li className="item__info">soda</li>
                                            <li className="item__info">bánh ngọt</li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="info__footer">
                                    <div className="info__footer-title">Sản phẩm</div>

                                    <div className="info__footer-content">
                                        <ul className="list__info">
                                            <li className="item__info">
                                                đăng kí nhận khuyến <br /> mãi
                                            </li>
                                            <li className="item__info">
                                                <input type="email" placeholder="Nhập email" />
                                                <button className="button-seen">gửi</button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="line__footer">2023 Copyright © TheLangThang. All rights reserved</div>
        </Fragment>
    );
}

export default Footer;
