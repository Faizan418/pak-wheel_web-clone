"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="bg-slate-100">
      <div className={styles._containar}>
        <div className={styles.main_containar}>
          <nav className={styles.nav_bar}>
            <div className={styles.div_one}>
              <div className={styles.first_info}>
                <div className={styles.o}>
                  <span>📳</span> Download App via SMS
                </div>
                <div className={styles.t}>
                  <span className="text-red-600">اردو</span> | Welcome Muhammad
                  Faizan <span>✉</span>
                </div>
              </div>
            </div>

            <div className={styles.div_two}>
              <div className={styles.second_info}>
                <div className={styles.logo_div}>
                  <Image
                    src={"/images/logo.svg"}
                    alt="logo"
                    width={160}
                    height={170}
                  />
                </div>
                <ul
                  className={`${styles.menu_div} ${
                    menuVisible ? styles.show_menu : ""
                  }`}
                >
                  <li className={styles.menu_li}>
                    New Car
                    <span className="font-light hover:text-gray-950"><MdArrowDropDown /></span>
                    <div className={styles.mega_menu}>
                    </div>
                  </li>
                  <li className={styles.menu_li}>
                    Used Car
                    <span className="font-light hover:text-gray-950"><MdArrowDropDown /></span>
                    <div className={styles.mega_menu}>
                    </div>
                  </li>
                  <li className={styles.menu_li}>
                    Bikes
                    <span className="font-light hover:text-gray-950"><MdArrowDropDown /></span>
                    <div className={styles.mega_menu}>
                    </div>
                  </li>
                  <li className={styles.menu_li}>
                    Auto Store
                    <span className="font-light hover:text-gray-950"><MdArrowDropDown /></span>
                    <div className={styles.mega_menu}>
                    </div>
                  </li>
                  <li className={styles.menu_li}>Video</li>
                  <li className={styles.menu_li}>Forums</li>
                  <li className={styles.menu_li}>Blog</li>
                  <li className={styles.menu_li}>
                    More
                    <span className="font-light hover:text-gray-950"><MdArrowDropDown /></span>
                    <div className={styles.mega_menu}>
                    </div>
                  </li>
                </ul>
                <button
                  className={styles.hamburger}
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                  aria-expanded={menuVisible}
                >
                  &#9776;
                </button>
              </div>
            </div>
          </nav>

          <div className={styles.main_contant}>
            <div className={styles.main}>
              <h1 className={styles.heading}>Find Used Cars in Pakistan</h1>
              <p className={styles.peraa}>
                With thousends of cars, we have just the right one for you
              </p>

              <div className={styles.selector_div}>
                <div className={styles.filter_div}>
                  <input
                    className={styles.inp}
                    type="text"
                    placeholder="Car Make or Model"
                  />
                </div>
                <div className={styles.filter_div}>
                  <select className={styles.filter_select}>
                    <option value="all">All Cities</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Peshawar">Peshawar</option>
                  </select>
                  <select className={styles.filter_select}>
                    <option value="all">price Range</option>
                    <option value="price_low_to_high">
                      Price (Low to High)
                    </option>
                    <option value="price_high_to_low">
                      Price (High to Low)
                    </option>
                    <option value="newest_first">Newest First</option>
                    <option value="oldest_first">Oldest First</option>
                  </select>
                </div>
                <span className={styles.search_icon}>
                  <IoMdSearch className="text-2xl" />
                </span>
              </div>
              <div className={styles.last_btn}>
                <button className={styles.filter_btn}>Advanced Filter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
