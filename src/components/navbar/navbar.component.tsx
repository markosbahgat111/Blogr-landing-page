import React, { HTMLProps, useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from 'assets/images/logo.svg';

interface Props extends HTMLProps<HTMLAllCollection> {
    iconClass: number,
    handleOpenMenu: (value: number) => void
 }

export const NavBar: React.FC<Props> = ({iconClass, handleOpenMenu}) => {
	const [showNav, setShowNav] = useState<boolean>(false);
	const handleNavElement = () => setShowNav((showNav) => !showNav);
  return (
    <nav className={styles.navbar}>
			<div className={styles.content}>
				<div className={styles.logo}>
					<Image src={logo} alt="shortly logo"/>
				</div>
			  <ul className={styles.menu_list} id={styles[`${showNav ? "active" : undefined}`]}>
					<ul className={styles.all_links}>
                      <li onClick={() => handleOpenMenu(1)} className={styles.features}>
                            Product <i className={`ml-1 fa-solid text-sm fa-chevron-${iconClass === 1 ? "up" : "down"}`}></i>
                            <ul id={styles[`${iconClass === 1 ? "show" : undefined}`]}>
                                <li>
                                    Overview
                                </li>
                                <li>
                                    Pricing
                                </li>
                                <li>
                                    MarketPlace
                                </li>
                                <li>
                                    Feature
                                </li>
                                <li>
                                    Integration
                                </li>
                            </ul>
                        </li>    
                      <li onClick={() => handleOpenMenu(2)} className={styles.pricing}>
                            Company <i className={`ml-1 text-sm fa-solid fa-chevron-${iconClass === 2 ? "up" : "down"}`} ></i>
                            <ul id={styles[`${iconClass === 2 ? "show" : undefined}`]}>
                                <li>About</li>
                                <li>Team</li>
                                <li>Blog</li>
                                <li>Careers</li>
                            </ul>
                        </li>   
                      <li onClick={() => handleOpenMenu(3)} className={styles.pricing}>
                            Connect <i className={`ml-1 text-sm fa-solid fa-chevron-${iconClass === 3 ? "up" : "down"}`} ></i>
                            <ul id={styles[`${iconClass === 3 ? "show" : undefined}`]}>
                                <li>Contact</li>
                                <li>Newsletter</li>
                                <li>LinkedIn</li>
                            </ul>
                        </li> 
					</ul>
					<div
						className={styles.icon}
						id={styles.cancel_btn}
						onClick={() => setShowNav((showNav) => !showNav)}>
						<i className="fas fa-times fa-lg"></i>
					</div>
					<ul className={styles.user_buttons}>
							<li onClick={handleNavElement}>
								<Link href="/">
									<a>Login</a>
								</Link>
							</li>

							<li onClick={handleNavElement}>
								<Link href="http://markosbahgat.com">
									<a className={styles["active"]}>Sign Up</a>
								</Link>
							</li>
					</ul>
				</ul>
				<div
					className={styles.icon}
					id={styles[`${showNav && "hide"}`]}
					onClick={() => setShowNav((showNav) => !showNav)}>
					<i className="fas fa-bars fa-lg"></i>
				</div>
			</div>
		</nav>
  )
}
