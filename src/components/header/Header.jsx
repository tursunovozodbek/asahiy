import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import Navbars from "./Navbar";
import { BsCreditCard2Back, BsGlobe,BsNewspaper,BsInstagram,BsTelegram,BsFacebook } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { TbTruckDelivery, TbShoppingCart } from "react-icons/tb";
import { FiHeart, FiUser } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import {IoIosPeople,} from "react-icons/io"
import {IoInformationCircle} from "react-icons/io5"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import { useTranslation,  } from 'react-i18next';
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import Modals from '../Modal/Modal'

function OffcanvasExample() {
  const [ value, setValue ] = useState('');
  const [data, setData] = useState([])
  const { t, i18n } = useTranslation();
  console.log('value search', value)
  useEffect(()=>{
    
fetch('https://dummyjson.com/products/search?q=phone')
.then(res => res.json())
.then(response => setData(response));
    console.log('sahifa yuklandi', data)
  },[value])
  // function Chnagvalue(e) {
  //   setVa
  // }

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="header-navbar-main"
          
        >
          <Container fluid>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="navbar-toggle"
            >
              <RxHamburgerMenu size={30} color="#0074d3" />
            </Navbar.Toggle>
            <Navbar.Brand href="#">
              <img
                src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
                alt=""
              />
            </Navbar.Brand>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
                    alt=""
                    width={100}
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="navbar-search navbar-search-none">
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder={t('navbarTop.nav1')}
                      className="me-2"
                      aria-label="Search"
                      style={{ color: "#008dff" }}
                      value={value}
                      onChange={(e)=>setValue(e.target.value)}
                    />
                    <Button variant="outline-success">
                      <BiSearch size={20} />
                      {t('navbarTop.nav2')}
                    </Button>
                  </Form>
                </div>

                <Nav className="navbar-header-class">
                  <div className="header-link">
                    <BsCreditCard2Back className="left-side-icon-responsive" />
                    <span ><Link to="/order-pay" className="header-page-link">{t('navbarTop.nav3')}</Link></span>
                  </div>

                  <div className="header-link">
                    <TbTruckDelivery className="left-side-icon-responsive" />
                    <span><Link to="/order-pay-status" className="header-page-link">{t('navbarTop.nav4')}</Link></span>
                  </div>

                  <div className="header-language-container header-language-container-responsive">
                    <BsGlobe
                      size={25}
                      style={{ marginBottom: -8 }}
                      className="dropdown-language-responsive"
                    />
                    <NavDropdown
                      title={i18n.language=='uz'? "O'zbekcha":"Русский"}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item onClick={()=>i18n.changeLanguage('uz')}>
                        O'zbekcha
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={()=>i18n.changeLanguage('ru')}>
                        Русский
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>

                  <div className="header-link header-link-responsive-none shop-hover">
                    <TbShoppingCart className="left-side-icon-responsive" />
                    <span>{t('navbarTop.nav5')}</span>
                  </div>
{/*///////////////////////////////////////////////////////////Shop hover status  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
                  <div className="shop-hover-container" style={{backgroundColor:'#f1f9ff'}}>
                    <div className="shop-hover-top"></div>
                    <div className="shop-hover-bottom">
                      <div className="shop-status">
                        <span style={{color:"gray",fontWeight:"500"}}>{t('navbarTop.nav9')}</span>
                        <span style={{fontWeight:"600"}}>0 {t('navbarTop.nav10')}</span>
                      </div>
                      <div className="shop-hover-button">
                           <button className="button1">{t('navbarTop.nav11')}</button>
                           <button className="button2">{t('navbarTop.nav12')}</button>
                      </div>
                    </div>
                  </div>

{/*///////////////////////////////////////////////////////////Shop hover status end\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}

                 <div className="header-link">
                    <FiHeart className="left-side-icon-responsive" />
                    <span><Link to="/favourites" className="header-page-link">{t('navbarTop.nav6')}</Link></span>
                  </div>

{/*/////////////////////////////////////////// Responsive Header icons ////////////////////////////////////////////////////////*/}

                  <div className="header-link-responsive-flex">
                    <IoIosPeople className="left-side-icon-responsive"/>
                    <span>{t('navbar.nav3')}</span>
                  </div>
                  <div className="header-link-responsive-flex">
                    <BsNewspaper className="left-side-icon-responsive"/>
                    <span>{t('navbar.nav2')}</span>
                  </div>
                  <div className="header-link-responsive-flex">
                    <IoInformationCircle className="left-side-icon-responsive"/>
                    <span>{t('navbarTop.nav8')}</span>
                  </div>

{/*/////////////////////////////////////////// Responsive Header icons end ////////////////////////////////////////////////////////*/}   
                
                  <div className="header-link header-link-responsive-none">
                  <Modals Icon={<FiUser className="left-side-icon-responsive" />}/>
                    <span>{t('navbarTop.nav7')}</span>
                  </div>

                  <div className="header-language-container header-language-container-desktop ">
                    <BsGlobe
                      size={25}
                      style={{ marginBottom: -8 }}
                      className="dropdown-language-responsive"
                    />
                    <NavDropdown
                      title={i18n.language=='uz'? "O'zbekcha":"Русский"}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className="language-selector"
                    >
                      <NavDropdown.Item onClick={()=>i18n.changeLanguage('uz')}>
                        O'zbekcha
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={()=>i18n.changeLanguage('ru')}>
                        Русский
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
{/*//////////////////////////////////////// Left Side bar Networks \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
                  <div className="left-side-bar-network">
                    <a href="https://www.instagram.com/asaxiy.uz/" target='blank' style={{cursor:"default"}}><BsInstagram className="left-side-bar-network-icon"/></a> 
                    <a href="https://t.me/asaxiyuz" target='blank' style={{cursor:"default"}}><BsTelegram className="left-side-bar-network-icon"/></a>
                    <a href="https://www.facebook.com/asaxiyshop/" target='blank' style={{cursor:"default"}}><BsFacebook className="left-side-bar-network-icon"/></a>
                  </div>
{/*//////////////////////////////////////// Left Side bar Networks end \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
      ))}
      <div className="navbar-search navbar-search-bottom">
        <Form className="d-flex">
          <Form.Control
            type="text"
            placeholder={t('navbarTop.nav1')}
            className="me-2"
            aria-label="Search"
            style={{ color: "#008dff" }}
          />
          <Button variant="outline-success">
            <BiSearch size={20} />
            {t('navbarTop.nav2')}
          </Button>
        </Form>
      </div>
      <Navbars/>
    </>
  );
}

export default OffcanvasExample;
