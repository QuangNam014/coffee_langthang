import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link} from "react-router-dom"
import author from '~/assets/img/author/Rectangle55.jpg';
import Exclude from '~/assets/img/Exclude.png';
import coffee_image1 from '~/assets/img/coffee_image1.jpg';

function Header(props) {
    return (
        <header id="header">
            <div className="header__container">
                <img src={coffee_image1} alt="" className="header__banner" />
                <div className="header__navbar">
                    <div className="grid wide">
                        <div className="header__navbar-container">
                            <div className="list__header-navbar">
                                <div className="row">
                                    <div className="item__navbar-left col l-1">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </div>
                                    <div className="item__navbar-center col l-9">
                                        <div className="row">
                                            <div className="item__navbar-content active">
                                                <Link to="/">Trang Chủ</Link>
                                            </div>
                                            <div className="item__navbar-content">
                                                <Link to="order" >Thực đơn</Link>
                                            </div>
                                            <div className="item__navbar-content item__navbar-logo">
                                                <a href="#header">
                                                    <img src={Exclude} alt="langthang logo" className="logo__page" />
                                                </a>
                                            </div>
                                            <div className="item__navbar-content">
                                                <Link to="product">Ưu Đãi</Link>
                                            </div>
                                            <div className="item__navbar-content">
                                                <Link to="about"> Về chúng tôi</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item__navbar-right col l-1">
                                        <div className="icon__shop-header">
                                            <FontAwesomeIcon icon={faBagShopping} />
                                            <span className="quatity__cart">0</span>
                                        </div>
                                    </div>
                                    <div className="user__login col l-1">
                                        <div className="user__login-img">
                                            <img src={author} alt="" />
                                        </div>

                                        <div className="user__option-login">
                                            <div className="user__content">
                                                <div className="user__content-name">Nguyễn Minh Trí</div>
                                                <div className="user__content-id">ID : #12512</div>
                                            </div>
                                            <div className="user__list-option">
                                                <div className="user__item-option active">TRANG CHỦ</div>
                                                <div className="user__item-option user__item-option-cart">GIỎ HÀNG</div>
                                                <div className="user__item-option">ĐƠN HÀNG</div>
                                                <div className="user__item-option">VOUCHER</div>
                                                <div className="user__item-option">CÀI ĐẶT</div>
                                                <div className="user__item-option">ĐĂNG XUẤT</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header__content">
                    <div className="grid wide">
                        <div className="header__content-container col l-8">
                            <div className="header__content-subtitle">
                                <h3>#Welcome To</h3>
                            </div>
                            <div className="header__content-title">
                                <h1>
                                    the langthang <br /> coffee house
                                </h1>
                            </div>
                            <div className="header__content-decs">
                                Không chỉ là cà phê, chúng tôi bán cả sự trải nghiệm
                            </div>
                        </div>
                        <div className="header__content-btn">
                            <div className="button">
                                <span className="content__button">Đặt hàng</span>
                            </div>
                            <div className="button button--transparent">
                                <span className="content__button">Xem video giới thiệu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
