import React from 'react'
import './Contact.css'
import contactImg from '../../assets/img/about-9.jpg'
import { MapContainer } from './GMap'


const Contact = () => {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
            <div className="col__2">
            <div className="contact__box">
                <div className="contact__meta">
                    <h1 className="hire__text">Hire Me.</h1>
                    <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                    <p className="hire__text white">
                        <strong>+8436 14 245 </strong>
                         or email
                        <strong> admin@example.com</strong>
                    </p>
                </div>
                <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
            </div>
            </div>
            <div className="col__2">
                    {/* <img src={contactImg} alt="" className="contact__img" /> */}
                    <div className="contact__img" style={{alignItems:'center'}}>
                    <iframe width="520" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Bhandara+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
                     <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=0b954942b4861eb811c786ee0c46094d6b4f8a7f'></script>
                     </div>
                </div>
      </div>
    </div>
  )
}

export default Contact
