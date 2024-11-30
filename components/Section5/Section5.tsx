import styles from './Section5.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Section5 = () => {
  return (
    <div className={styles._main_containar}>
        <div className={styles._containar}>
            <div className={styles._main_heading_div}>
                <h1 className={styles._main_heading1}>Featured Used Cars for Sale</h1>
                <h3 className={styles._main_heading2}><Link className='hover:text-sky-600' href={'#'}>View All Featured Used Cars</Link></h3>
            </div>

            <div className={styles._grid}>

                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-one.png" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Hyundai Elantra 2021</h1>
                        <p className={styles._card_dec_price}>PKR 5,470,000</p>
                        <p className={styles._card_dec_city}>Lahore</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-two.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Honda N Box 2020</h1>
                        <p className={styles._card_dec_price}>PKR 3,075,000</p>
                        <p className={styles._card_dec_city}>Karachi</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-three.png" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Hyundai Tucson 2021</h1>
                        <p className={styles._card_dec_price}>PKR 7,295,000</p>
                        <p className={styles._card_dec_city}>Lahore</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-four.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Toyota Fortuner 2015</h1>
                        <p className={styles._card_dec_price}>PKR 7,450,000</p>
                        <p className={styles._card_dec_city}>Islamabad</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-five.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Honda Civic 2015</h1>
                        <p className={styles._card_dec_price}>PKR 3,350,000</p>
                        <p className={styles._card_dec_city}>Lahore</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-six.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Toyota corolla 2012</h1>
                        <p className={styles._card_dec_price}>PKR 3,675,000</p>
                        <p className={styles._card_dec_city}>Lahore</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-seven.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Toyota corolla 2012</h1>
                        <p className={styles._card_dec_price}>PKR 2,775,000</p>
                        <p className={styles._card_dec_city}>Lahore</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-eight.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Toyota Sienta 2019</h1>
                        <p className={styles._card_dec_price}>PKR 5,310,000</p>
                        <p className={styles._card_dec_city}>Islamabad</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-nine.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Toyota Lnad Cruiser 2010</h1>
                        <p className={styles._card_dec_price}>PKR 25,000,000</p>
                        <p className={styles._card_dec_city}>Lahore</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-ten.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>FAW 2V 2016</h1>
                        <p className={styles._card_dec_price}>PKR 1,250,000</p>
                        <p className={styles._card_dec_city}>Karachi</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-eleven.jpg" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Daihatsu Move 2010</h1>
                        <p className={styles._card_dec_price}>PKR 1,850,000</p>
                        <p className={styles._card_dec_city}>Rewalpindi</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-twelive.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Hyundai Santro 2005</h1>
                        <p className={styles._card_dec_price}>PKR 1,000,000</p>
                        <p className={styles._card_dec_city}>Faisalabad</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-thirteen.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Ford F 150 2018</h1>
                        <p className={styles._card_dec_price}>PKR 22,600,000</p>
                        <p className={styles._card_dec_city}>Karachi</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-fourteen.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Toyota Prado 2013</h1>
                        <p className={styles._card_dec_price}>PKR 18,900,000</p>
                        <p className={styles._card_dec_city}>Karachi</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-fifteen.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Honda Civic 2018</h1>
                        <p className={styles._card_dec_price}>PKR 5,850,000</p>
                        <p className={styles._card_dec_city}>Sialkot</p>
                    </div>
                </div>
                <div className={styles._card}>
                    <div className={styles._card_img_box}>
                        <Image src="/images/future-use-sixteen.webp" alt="toyota-fortuner" width={250} height={100} />
                    </div>
                    <div className={styles._card_dec_box}>
                        <h1 className={styles._card_dec_name}>Suzuki Alto 2020</h1>
                        <p className={styles._card_dec_price}>PKR 2,150,000</p>
                        <p className={styles._card_dec_city}>Karachi</p>
                    </div>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Section5
