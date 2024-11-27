import styles from './Footer.module.css'
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.main_containar}>
      
      <div className={styles.containar}>
        <div className={styles.div_one}>

        <div className={styles.box}>
          <h2 className={styles.headings2}>Cars By Make</h2>
          <p className={styles.peras}>Toyota Cars for Sale</p>
          <p className={styles.peras}>Suzuki Cars for Sale</p>
          <p className={styles.peras}>Honda Cars for Sale</p>
          <p className={styles.peras}>Daihatsu Cars for Sale</p>
          <p className={styles.peras}>Mitsubishi Cars for Sale</p>
          <p className={styles.peras}>Nissan Cars for Sale</p>
          <p className={styles.peras}>Mercedes Cars for Sale</p>
          <p className={styles.peras}>Hyundai Cars for Sale</p>
          <p className={styles.peras}>BMW Cars for Sale</p>
        </div>

        <div className={styles.box}>
          <h2 className={styles.headings2}>Cars By City</h2>
          <p className={styles.peras}>Cars in Karachi</p>
          <p className={styles.peras}>Cars in Lahore</p>
          <p className={styles.peras}>Cars in Islamabad</p>
          <p className={styles.peras}>Cars in Rawalpindi</p>
          <p className={styles.peras}>Cars in Peshawar</p>
          <p className={styles.peras}>Cars in Faisalabad</p>
          <p className={styles.peras}>Cars in Multan</p>
          <p className={styles.peras}>Cars in Gujranwala</p>
          <p className={styles.peras}>Cars in Sialkot</p>
          <p className={styles.peras}>Cars in Sargodha</p>
        </div>

        <div className={styles.box}>
          <h2 className={styles.headings2}>Explore PakWheels</h2>
          <p className={styles.peras}>Used Cars</p>
          <p className={styles.peras}>Used Bikes</p>
          <p className={styles.peras}>New Cars</p>
          <p className={styles.peras}>Auto Parts & Accessories</p>
          <p className={styles.peras}>Cool Rides</p>
          <p className={styles.peras}>Forums</p>
          <p className={styles.peras}>Autoshow</p>
          <p className={styles.peras}>Sitemap</p>
        </div>

        <div className={styles.box}>
          <h2 className={styles.headings2}>PakWheels.com</h2>
          <p className={styles.peras}>About PakWheels.com</p>
          <p className={styles.peras}>Our Products</p>
          <p className={styles.peras}>Advertise With Us</p>
          <p className={styles.peras}>How To Pay</p>
          <p className={styles.peras}>FAQs</p>
          <p className={styles.peras}>Refunds & Returns</p>
          <p className={styles.peras}>Careers</p>
          <p className={styles.peras}>Contact Us</p>
        </div>

        <div className={styles.box_last}>
          <h2 className={styles.headings2}>Sell On PakWheels</h2>
          <p className={styles.peras}>Sell Your Car</p>
          <p className={styles.peras}>Sell Your Bike</p>
          <p className={styles.peras}>Sell Accessory</p>
          <h1 className={styles.heading1}>Subscribe to our Newsletter</h1>
              <div className={styles.inp_div}>
                <input className={styles.inp} type="email" placeholder='name@email.com' />
                <button className={styles.inp_btn}>Subscribe</button>
              </div>
              <h3 className='mt-3 text-slate-100 text-md font-bold flex justify-center'>Follow Us</h3>
              <div className={styles.main_icon_div}>
                  <div className={styles.div_icon}><FaTwitter /></div>
                  <div className={styles.div_icon}><FaWhatsapp /></div>
                  <div className={styles.div_icon}><FaInstagram /></div>
                  <div className={styles.div_icon}><FaFacebook /></div>
              </div>
        </div>
        </div>

        <div className={styles.div_two}>

        <div className={styles.box}>
          <h2 className={styles.headings2}>Cars by Category</h2>
          <p className={styles.peras}>Jeep</p>
          <p className={styles.peras}>Japanese Cars</p>
          <p className={styles.peras}>Imported Cars</p>
          <p className={styles.peras}>Automatic Cars</p>
          <p className={styles.peras}>Low Priced Cars</p>
          <p className={styles.peras}>4x4 Cars</p>
          <p className={styles.peras}>660cc Cars</p>
          <p className={styles.peras}>1000cc Cars</p>
        </div>

        <div className={styles.box}>
          <h2 className={styles.headings2}>Cars by Body Type</h2>
          <p className={styles.peras}>Sedan</p>
          <p className={styles.peras}>Hatchback</p>
          <p className={styles.peras}>SUV</p>
          <p className={styles.peras}>Crossover</p>
          <p className={styles.peras}>Mini Van</p>
          <p className={styles.peras}>Compact SUV</p>
          <p className={styles.peras}>MPV</p>
          <p className={styles.peras}>Van</p>
        </div>

        <div className={styles.box}>
          <h2 className={styles.headings2}>Cars by Color</h2>
          <p className={styles.peras}>White Cars</p>
          <p className={styles.peras}>Silver Cars</p>
          <p className={styles.peras}>Black Cars</p>
          <p className={styles.peras}>Grey Cars</p>
          <p className={styles.peras}>Blue Cars</p>
          <p className={styles.peras}>Red Cars</p>
          <p className={styles.peras}>Green Cars</p>
          <p className={styles.peras}>Gold Cars</p>
        </div>

        <div className={styles.box}>
          <h2 className={styles.headings2}>Cars by Province</h2>
          <p className={styles.peras}>Cars in Punjab</p>
          <p className={styles.peras}>Cars in Sindh</p>
          <p className={styles.peras}>Cars in KPK</p>
          <p className={styles.peras}>Cars in Balochistan</p>
          <p className={styles.peras}>Cars in Azad Kashmir</p>
          <p className={styles.peras}>Cars in Federally Administered</p>
          <p className={styles.peras}>Tribal Areas</p>
        </div>

        <div className={styles.box_last}>
          <h2 className={styles.headings2}>Download Mobile Apps</h2>
          <p className={styles.peras}>0</p>
          <p className={styles.peras}>0</p>
          <p className={styles.peras}>0</p>
        </div>

        </div>
        <div className={styles.div_three}>
          <p>Copyright © 2003 - 2024 PakWheels (Pvt) Ltd. - All Rights Reserved.</p>
          <p>Terms of Service |  Privacy Policy</p>
          <p>Reproduction of material from any PakWheels.com pages without permission is strictly prohibited.</p>
        </div>


      </div>

    </div>
  )
}

export default Footer
