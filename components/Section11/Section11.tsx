import styles from './Section11.module.css'
import Link from "next/link";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";


const Section8 = () => {
  return (
    <div className={styles._main_containar}>
    <div className={styles._containar}>
      <div className={styles._main_heading_div}>
        <h1 className={styles._main_heading1}>Popular New Bikes</h1>
        <h3 className={styles._main_heading2}>
          <Link className="hover:text-sky-600" href={"#"}>
          View All New Bikes
          </Link>
        </h3>
      </div>


      <div className={styles._grid}>

        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-one.jpg"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}> Honda CD 70</h1>
            <p className={styles._card_dec_price}>PKR 157,900</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <span className="text-gray-500 text-sm font-light">
                  535 Reviews
                </span>
              </div>
            </p>
          </div>
        </div>
        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-two.jpg"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>Honda CG 125</h1>
            <p className={styles._card_dec_price}>PKR 234,900</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <p className="text-gray-500 text-sm font-light">
                  535 Reviews
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-three.jpg"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>          
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>Suzuki GS 150</h1>
            <p className={styles._card_dec_price}>PKR 389,000</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <p className="text-gray-500 text-sm font-light">
                  535 Reviews
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-four.jpg"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>       
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>Yamaha YBR 125</h1>
            <p className={styles._card_dec_price}>PKR 466,000</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <p className="text-gray-500 text-sm font-light">
                  535 Reviews
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-five.png"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>          
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>Yamaha YBR 125G</h1>
            <p className={styles._card_dec_price}>PKR 485,000</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <p className="text-gray-500 text-sm font-light">
                  535 Reviews
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-six.jpg"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>          
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>Honda CB 150F</h1>
            <p className={styles._card_dec_price}>PKR 497,900</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <p className="text-gray-500 text-sm font-light">
                  535 Reviews
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-seven.jpg"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>
          
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>Suzuki GR 150</h1>
            <p className={styles._card_dec_price}>PKR 547,000</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <p className="text-gray-500 text-sm font-light">
                  535 Reviews
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-eight.jpg"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>          
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>Honda Pridor</h1>
            <p className={styles._card_dec_price}>PKR 208,900</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <p className="text-gray-500 text-sm font-light">
                  535 Reviews
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-nine.jpg"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>          
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>Honda CB 125F</h1>
            <p className={styles._card_dec_price}>PKR 390,900</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <p className="text-gray-500 text-sm font-light">
                  535 Reviews
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-ten.jpg"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>         
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>Benelli TRK 502X</h1>
            <p className={styles._card_dec_price}>PKR 2,950,000</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <p className="text-gray-500 text-sm font-light">
                  535 Reviews
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-eleven.jpg"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>
          
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>BMW S1000RR</h1>
            <p className={styles._card_dec_price}>PKR 12,600,000</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <p className="text-gray-500 text-sm font-light">
                  535 Reviews
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-twelive.jpg"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>
          
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>Benelli TNT 150i</h1>
            <p className={styles._card_dec_price}>PKR 610,000</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <p className="text-gray-500 text-sm font-light">
                  535 Reviews
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-thirteen.jpg"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>
          
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>Yamaha YB 125Z</h1>
            <p className={styles._card_dec_price}>PKR 424,000</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <p className="text-gray-500 text-sm font-light">
                  535 Reviews
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-fourteen.jpg"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>
          
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>Honda CG 125S GOLD</h1>
            <p className={styles._card_dec_price}>PKR 292,900</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <p className="text-gray-500 text-sm font-light">
                  535 Reviews
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-fifteen.png"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>
          
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>Honda CG 125S</h1>
            <p className={styles._card_dec_price}>PKR 282,900</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <p className="text-gray-500 text-sm font-light">
                  535 Reviews
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className={styles._card}>
          <div className={styles._card_img_box}>
            <Image
              src="/images/popular-new-bike/new-bike-sixteen.png"
              alt="toyota-fortuner"
              width={250}
              height={100}
            />
          </div>
          
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>Honda CG 125S</h1>
            <p className={styles._card_dec_price}>PKR 282,900</p>
            <p className={styles._card_dec_city}>
              <div className={styles.radding_div}>
                <span className={styles.rating_iconst_div}>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />{" "}
                </span>{" "}
                <p className="text-gray-500 text-sm font-light">
                  535 Reviews
                </p>
              </div>
            </p>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Section8
