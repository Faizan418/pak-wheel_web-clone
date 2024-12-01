import styles from './Section7.module.css'
import Link from "next/link";
import Image from "next/image";

const Section7 = () => {
  return (
    <div className={styles._main_containar}>
      <div className={styles._containar}>
        <div className={styles._main_heading_div}>
          <h1 className={styles._main_heading1}>Auto Store Car Parts & Accessories</h1>
          <h3 className={styles._main_heading2}>
            <Link className="hover:text-sky-600" href={"#"}>
              View All New Cars
            </Link>
          </h3>
        </div>

        <ul className={styles._ul_div}>
          <li className={styles._li}>Sub Category</li>
          <li className={styles._li}>Make</li>
          <li className={styles._li}>Model</li>
          <li className={styles._li}>Brand</li>
        </ul>

        <div className={styles._grid}>

          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-one.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Car Washer</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-two.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Tyres</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-three.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Helmets</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-four.png"
                alt="product-image"
                width={65}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Keychains</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-five.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Car battery</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-six.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Alloy Rims</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-seven.png"
                alt="product-image"
                width={45}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Engine Oil</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-eight.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Car Charger</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-nine.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Microfiber Cloth</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-ten.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>GPS Tracker</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-eleven.png"
                alt="product-image"
                width={65}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Engines For Sale</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-twelive.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Fuel Pump</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-thirteen.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Air Freshener</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-fourteen.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Floor Mats </h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-fifteen.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Car Shades </h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-sixteen.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Car Cover</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-seventeen.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Healdlights</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-eighteen.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Car Bumpers</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-nineteen.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Car Fender</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-twenty.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Air Filters</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-twentytwo.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Coolants</h1>
            </div>
          </div>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/auto-store-twentyfour.png"
                alt="product-image"
                width={80}
                height={100}
              />
            </div>
            <div className={styles._card_dec_box}>
              <h1 className={styles._card_dec_name}>Hose Pipe</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Section7
