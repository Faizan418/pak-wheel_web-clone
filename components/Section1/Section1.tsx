import styles from './Section1.module.css'
import Image from 'next/image'


const Section1 = () => {
  return (
    <div className={styles._main_containar}>

        <div className={styles._containar}>

            <div className={styles._upper_div}>

                <fieldset className={styles.fieldset_div}>
                    <legend className={styles.lagend}>\ Sell Your Car on PakWheels and Get the Best Price  /</legend>

                    <div className={styles.first}>
                        <h1 className={styles._headings_h1}>Post your Ad on PakWheels</h1>
                        <div className={styles._perass_div}>
                            <p className={styles._perass}><span className='text-green-500'>✔</span> Post your Ad for Free in 3 Easy Steps</p>
                            <p className={styles._perass}><span className='text-green-500'>✔</span> Get Genuine offers from Verified Buyers</p>
                            <p className={styles._perass}><span className='text-green-500'>✔</span> Sell your car Fast at the Best Price</p>
                            <button className={styles.btn1} type='button'>Post Your Ad</button>
                        </div>
                    </div>

                    <div  className={styles.center}> <legend className={styles.lagend_center}>OR</legend></div>

                    <div className={styles.second}>
                       <h1 className={styles._headings_h1}>Try PakWheels Sell It For Me</h1>
                       <div className={styles._perass_div}>
                        <p className={styles._perass}><span className='text-green-500'>✔</span> Dedicated Sales Expert to Sell your Car</p>
                        <p className={styles._perass}><span className='text-green-500'>✔</span> We Bargain for you and share the Best Offer</p>
                        <p className={styles._perass}><span className='text-green-500'>✔</span> We ensure Safe & Secure Transaction</p>
                        <button className={styles.btn2} type='button'>Register Your Car</button>
                       </div>
                    </div>
                    
                </fieldset>
                
                
            </div>
            <div className={styles._lower_div}>
                
                <div className={styles.one}>
                    <Image src={'/images/one.jpg'} alt='img' height={500} width={500}/>
                </div>
                <div className={styles.two}>
                    <Image src={'/images/two.png'} alt='img' height={500} width={500}/>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Section1
