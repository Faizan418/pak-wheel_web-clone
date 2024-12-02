import styles from "./Section6.module.css";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

const Section6 = () => {
  return (
    <div className={styles._main_containar}>
      <div className={styles._containar}>
        <div className={styles._main_heading_div}>
          <h1 className={styles._main_heading1}>Featured New Cars</h1>
          <h3 className={styles._main_heading2}>
            <Link className="hover:text-sky-600" href={"#"}>
              View All New Cars
            </Link>
          </h3>
        </div>

        <ul className={styles._ul_div}>
          <li className={styles._li}>Popular</li>
          <li className={styles._li}>Upcommig</li>
          <li className={styles._li}>Newly Launched</li>
        </ul>

        <div className={styles._grid}>


          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/future-new-car/futured-one.jpg"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Toyota Corolla</h1>
              <p className={styles._card_dec_price}>PKR 59.7 - 75.5 lacs</p>
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
                src="/images/futured-two.png"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>suzuki</h1>
              <p className={styles._card_dec_price}>PKR 23.3 - 30.5 lacs</p>
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
                src="/images/futured-three.jpg"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Honda City</h1>
              <p className={styles._card_dec_price}>PKR 46.5 - 58.5 lacs</p>
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
                src="/images/future-new-car/futured-four.jpg"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Honda Civic</h1>
              <p className={styles._card_dec_price}>PKR 86.6 - 99.0 lacs</p>
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
                src="/images/future-new-car/futured-five.png"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Suzuki Cultus</h1>
              <p className={styles._card_dec_price}>PKR 38.6 - 45.5 lacs</p>
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
                src="/images/future-new-car/futured-six.jpg"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Suzuki Wagon R</h1>
              <p className={styles._card_dec_price}>PKR 32.1 - 37.4 lacs</p>
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
                src="/images/future-new-car/futured-seven.png"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Toyota Yaris</h1>
              <p className={styles._card_dec_price}>PKR 44.8 - 63.2 lacs</p>
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
                src="/images/future-new-car/futured-eight.jpg"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Suzuki Swift</h1>
              <p className={styles._card_dec_price}>PKR 43.4 - 47.2 lacs</p>
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
                src="/images/future-new-car/futured-nine.png"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Toyota Fortuner</h1>
              <p className={styles._card_dec_price}>PKR 1.45 - 1.99 crore</p>
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
                src="/images/future-new-car/futured-ten.jpeg"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>KIA Sportage</h1>
              <p className={styles._card_dec_price}>PKR 73.0 - 90.0 lacs</p>
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
                src="/images/future-new-car/futured-eleven.png"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>KIA Picanto</h1>
              <p className={styles._card_dec_price}>PKR 36.0 - 38.5 lacs</p>
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
                src="/images/future-new-car/futured-twelive.png"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Changan Alsvin</h1>
              <p className={styles._card_dec_price}>PKR 38.0 - 45.7 lacs</p>
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
                src="/images/future-new-car/futured-thirteen.png"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Toyota Land Cruiser</h1>
              <p className={styles._card_dec_price}>PKR 12.0 crore</p>
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
                src="/images/future-new-car/futured-fourteen.jpg"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Honda BR-V</h1>
              <p className={styles._card_dec_price}>PKR 63.0 lacs</p>
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
                src="/images/future-new-car/futured-fifteen.jpg"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Prince Pearl</h1>
              <p className={styles._card_dec_price}>PKR 18.5 lacs</p>
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
                src="/images/future-new-car/futured-sixteen.png"
                alt="toyota-fortuner"
                width={250}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Hyundai Tucson</h1>
              <p className={styles._card_dec_price}> PKR 71.2 - 87.1 lacs</p>
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
  );
};

export default Section6;
