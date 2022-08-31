import React from 'react'
import './Footer.css'
import footerImg from '../../assets/img/footer_logo.png'

const Footer = () => {
  return (
   <div className="footer d__flex align__items__center justify__content__space__between pz-10" style={{"padding":"10px 20px","zIndex":"500","backgroundColor":"#000"}}>
        <img src={footerImg} alt="" className="footer__img pointer"/>   
        <span className="copyright" style={{"color":"#c6c9d8", "fontSize":"14px","opacity":"0.75"}}> Copyright &copy; 2022 programmer Pritam Ramteke. All Rights Reserved. </span>
   </div>
  )
}

export default Footer
