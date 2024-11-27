'use client'
import styles from "./Header.module.css";
import Image from "next/image";
import { useState } from "react";

const Header = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={styles._containar}>
      <div className={styles.main_containar}>

        <nav className={styles.nav_bar}>
          <div className={styles.div_one}>
            <div className={styles.first_info}> 
                <div className={styles.o}><span>📳</span> Download App via SMS</div>
                <div className={styles.t}><span className="text-red-600">اردو</span> | Welcome Muhammad Faizan <span>📳</span></div>
            </div>
          </div>
            
          <div className={styles.div_two}>
            <div className={styles.second_info}>
                <div className={styles.logo_div}>
                    <Image src={'/images/logo.svg'} alt="logo" width={160} height={160} />
                </div>
                {/* <ul className={styles.menu_div}> */}
                    <ul className={`${styles.menu_div} ${menuVisible ? styles.show_menu : ""}`}>
                    <li className={styles.menu_li}>Used Car<span className="font-light hover:text-gray-950">▾</span> </li>
                    <li className={styles.menu_li}>New Car<span className="font-light hover:text-gray-950">▾</span> </li>
                    <li className={styles.menu_li}>Bikes<span className="font-light hover:text-gray-950">▾</span> </li>
                    <li className={styles.menu_li}>Auto Store<span className="font-light hover:text-gray-950">▾</span> </li>
                    <li className={styles.menu_li}>Video<span className="font-light hover:text-gray-950">▾</span> </li>
                    <li className={styles.menu_li}>Forums<span className="font-light hover:text-gray-950">▾</span> </li>
                    <li className={styles.menu_li}>Blog</li>
                    <li className={styles.menu_li}>More<span className="font-light hover:text-amber-400">▾</span> </li>
                </ul>
                <button className={styles.hamburger}onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuVisible}>&#9776;</button>
            </div>
          </div>
        </nav>

        <div className={styles.main}>Find Used Cars in Pakistan</div>

      </div>
    </div>
  );
};

export default Header;
