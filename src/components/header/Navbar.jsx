import React,{useState} from 'react';
import './Navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose,MdOutlineSmartToy } from "react-icons/md";
import { Link } from "react-router-dom";
import {FiSmartphone} from "react-icons/fi"
import {TfiWindow} from "react-icons/tfi"
import {AiOutlineDesktop,AiOutlineCar} from "react-icons/ai"
import {IoGameControllerOutline,IoFootball,IoShirtOutline} from "react-icons/io5"
import {CgSmartHomeRefrigerator} from "react-icons/cg"
import {SlScreenDesktop} from "react-icons/sl"
import {BiDish} from "react-icons/bi"
import {GiWindow,GiToyMallet,GiHairStrands} from "react-icons/gi"
import {HiOutlineBuildingOffice2} from "react-icons/hi2"
import {TbBooks} from "react-icons/tb"
import {Row, Col} from 'react-bootstrap'
// language
import { useTranslation, } from 'react-i18next';

const data = [
  {
    id:1,
    name:"Kitoblar",
    icon:<TbBooks size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"Badiiy adabiyotlar",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          },
          {
            id:2,
            name:"Jahon Adabiyotlar"
          },
          {
            id:3,
            name:"Uzbek Adabiyoti"
          }
        ]
      }
    ]
  },
  {
    id:2,
    name:"Telefon va gatjetlar",
    icon:<FiSmartphone size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"Kompyuter qurilmalari",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          },
          {
            id:2,
            name:"Jahon Adabiyotlar"
          },
          {
            id:3,
            name:"Uzbek Adabiyoti"
          }
        ]
      }
    ],
  },
  {
    id:3,
    name:"Konditsionerlar",
    icon:<TfiWindow size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:4,
    name:"Kompyuter va orgtexnika",
    icon:<AiOutlineDesktop size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:5,
    name:"Geymerlar uchun",
    icon:<IoGameControllerOutline size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:6,
    name:"Maishiy texnika",
    icon:<CgSmartHomeRefrigerator size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:7,
    name:"Televizor video va audio",
    icon:<SlScreenDesktop size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:8,
    name:"Idish tovoqlar",
    icon:<BiDish size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:9,
    name:"Mebel",
    icon:<GiWindow size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:10,
    name:"Sport va dam olish",
    icon:<IoFootball size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:11,
    name:"Uy va offis uchun texnika jihozlari",
    icon:<HiOutlineBuildingOffice2 size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:12,
    name:"Avto",
    icon:<AiOutlineCar size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:13,
    name:"O'yinchoqlar, sovg'alar, va aksessuarlar",
    icon:<GiToyMallet size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:14,
    name:"Kiyim poyabzal va aksessuarlar",
    icon:<IoShirtOutline size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:15,
    name:"Bolalar uchun tovarlar",
    icon:<MdOutlineSmartToy size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:16,
    name:"Go'zallik va salomatlik",
    icon:<GiHairStrands size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
]

function Menu(){
  const [id, setId] = useState(1)
  console.log('id for category', id)
  return( 
    <>
      <div className="container-menu">
        <div className="row">
          <div className="left col-3">
            <ul style={{flexDirection:"column"}}>
               {data.map((item)=>{
                 return (
                  <>
                    <div style={{display:"flex",alignItems:"center",justfiyContent:"center",cursor:"pointer"}}>
                      <li className={`${id==item.id && 'hover-category'}`} onMouseOver={()=>setId(item.id)}>{item.icon}{item.name}</li>
                    </div>
                  </>
                 )
               })}
            </ul>
           </div>
          <div className="right col-9">
            <Row>
                {data[item-1].submenu?.map(item=>{
                  return <>
                    <Col lg={3} md={3}>
                    <h4>{item?.name}</h4>
                    <ul style={{display:'flex', flexDirection: 'column', margin: '0', padding: '0'}}>
                      {item?.submenu?.map(item=><li>{item?.name}</li>)}
                    </ul>
                    </Col>
                  </>
                })}
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Navbar() {
  const { t } = useTranslation();
  const [open,setOpen] = useState(false)
  const openToggle=()=>{
    setOpen(!open)
  }
  return (
    <div className='header-navbar'>
        <ul>
            <li onClick={openToggle} style={{display:'flex',alignItems:'center'}}>{open?<MdOutlineClose size={23} style={{marginRight:'10px',color:"#008dff",cursor:'pointer'}}/>:<RxHamburgerMenu className='hamburger-menu' size={23} style={{marginRight:'10px',color:"#008dff",cursor:'pointer',}}/>}<Link to="/">{t('navbar.nav1')}</Link></li>
            <li><Link to='/news'>{t('navbar.nav2')}</Link></li>
            <li><Link to='/newProduct'>{t('navbar.nav3')}</Link></li>
            <li><Link to='/Discounts'>{t('navbar.nav4')}</Link></li>
            <li><Link to='/books'>{t('navbar.nav5')}</Link></li>
            <li><Link to='/telephones'>{t('navbar.nav6')}</Link></li>
            <li><Link to='/tv'>{t('navbar.nav7')}</Link></li>
            <li><Link to='/sports'>{t('navbar.nav8')}</Link></li>
        </ul>
        {open?<Menu/>:""}
        
    </div>
  )
}
