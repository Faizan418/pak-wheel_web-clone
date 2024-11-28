import styles from './Section2.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Section2 = () => {
  return (
    <div className={styles._main_containar}>

        <div className={styles.containar}>
            <h1 className={styles.main_heading}>PakWheels Offerings</h1>

            <div className={styles._main_box}>


            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_one.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1>PakWheels</h1><p>SELL IT FOR ME</p></div>
                </div>
            </Link>
            

            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_two.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1>PakWheels</h1><p>AUCTION SHEET VERIFICATION</p></div>
                </div>
            </Link>

            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_three.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1>PakWheels</h1><p>CAR INSPECTION</p></div>
                </div>
            </Link>

            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_four.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1>PakWheels</h1><p>PARTNER WORKSHOP</p></div>
                </div>
            </Link>

            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_five.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1>PakWheels</h1><p>CAR INSURANCE</p></div>
                </div>
            </Link>

            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_six.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1>PakWheels</h1><p>CAR FINANCE</p></div>
                </div>
            </Link>

            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_seven.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1>PakWheels</h1><p>CAR REGISTRATION</p></div>
                </div>
            </Link>

            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_eight.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1>PakWheels</h1><p>OWNERSHIP TRANSFER</p></div>
                </div>
            </Link>

               




            </div>
        </div>
      
    </div>
  )
}

export default Section2
