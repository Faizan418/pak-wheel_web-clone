import styles from './Section4.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Section4 = () => {
  return (
    <div className={styles._main_containar}>
        <div className={styles._containar}>
            <div className={styles._main_heading_div}>
                <h1 className={styles._main_heading1}>Managed by PakWheels</h1>
                <h3 className={styles._main_heading2}><Link className='hover:text-sky-600' href={'#'}>View All Managed By PakWheel Cars</Link></h3>
            </div>

            <div className={styles._grid}>


                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/managed-one.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Toyota Fortuner 2017</h1>
                        <p className={styles._card_dec_price}>PKR 12,000,000</p>
                        <p className={styles._card_dec_city}>Karachi</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/managed-two.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>ChanganOshan X7-2024</h1>
                        <p className={styles._card_dec_price}>PKR 8,600,000</p>
                        <p className={styles._card_dec_city}>Gujranwala</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/managed-three.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Nissan Dayz 2020</h1>
                        <p className={styles._card_dec_price}>PKR 3,900,000</p>
                        <p className={styles._card_dec_city}>Karachi</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/managed-four.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>BMW 2 Series 2021</h1>
                        <p className={styles._card_dec_price}>PKR 22,000,000</p>
                        <p className={styles._card_dec_city}>Islamabad</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/managed-five.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Honda Civic 2019</h1>
                        <p className={styles._card_dec_price}>PKR 5,000,000</p>
                        <p className={styles._card_dec_city}>Karachi</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/managed-six.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Toyota Yaris 2021</h1>
                        <p className={styles._card_dec_price}>PKR 4,200,000</p>
                        <p className={styles._card_dec_city}>Karachi</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/managed-seven.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Honda Civic 2015</h1>
                        <p className={styles._card_dec_price}>PKR 4,300,000</p>
                        <p className={styles._card_dec_city}>Islamabad</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/managed-eight.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Honda Vezel 1014</h1>
                        <p className={styles._card_dec_price}>PKR 4,375,000</p>
                        <p className={styles._card_dec_city}>Lahore</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/managed-nine.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>FAW V2 2016</h1>
                        <p className={styles._card_dec_price}>PKR 1,250,000</p>
                        <p className={styles._card_dec_city}>Karachi</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/managed-ten.jpg" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Daihatsu Move 2010</h1>
                        <p className={styles._card_dec_price}>PKR 1,850,000</p>
                        <p className={styles._card_dec_city}>Rawalpindi</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/managed-eleven.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Hyundai Santro 2005</h1>
                        <p className={styles._card_dec_price}>PKR 1,000,000</p>
                        <p className={styles._card_dec_city}>Faisalabad</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/managed-twelive.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Toyota Fortuner 2022</h1>
                        <p className={styles._card_dec_price}>PKR 13,800,000</p>
                        <p className={styles._card_dec_city}>Lahore</p>
                    </div>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Section4
