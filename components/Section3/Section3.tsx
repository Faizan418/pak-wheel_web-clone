import styles from './Section3.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Section3 = () => {
  return (
    <div className={styles._main_containar}>

        <div className={styles.containar}>
            <h1 className={styles.main_heading}>PakWheels Offerings</h1>

            <div className={styles._main_box}>


            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_one.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1 className={styles.box_heading_blue}>PakWheels</h1><p className='text-sm'>SELL IT FOR ME</p></div>
                </div>
            </Link>
            

            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_two.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1 className={styles.box_heading_blue}>PakWheels</h1><p className='text-sm'>AUCTION SHEET VERIFICATION</p></div>
                </div>
            </Link>

            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_three.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1 className={styles.box_heading_blue}>PakWheels</h1><p className='text-sm'>CAR INSPECTION</p></div>
                </div>
            </Link>

            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_four.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1 className={styles.box_heading_blue}>PakWheels</h1><p className='text-sm'>PARTNER WORKSHOP</p></div>
                </div>
            </Link>

            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_five.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1 className={styles.box_heading_blue}>PakWheels</h1><p className='text-sm'>CAR INSURANCE</p></div>
                </div>
            </Link>

            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_six.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1 className={styles.box_heading_blue}>PakWheels</h1><p className='text-sm'>CAR FINANCE</p></div>
                </div>
            </Link>

            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_seven.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1 className={styles.box_heading_blue}>PakWheels</h1><p className='text-sm'>CAR REGISTRATION</p></div>
                </div>
            </Link>

            <Link href={'#'}>
                <div className={styles.main_div}>
                    <div  className={styles.img_div}><Image src={'/images/img_eight.png'} alt='one' width={150} height={150}/></div>
                    <div className={styles.desc_div}><h1 className={styles.box_heading_blue}>PakWheels</h1><p className='text-sm'>OWNERSHIP TRANSFER</p></div>
                </div>
            </Link>

               




            </div>
        </div>
      
    </div>
  )
}

export default Section3
