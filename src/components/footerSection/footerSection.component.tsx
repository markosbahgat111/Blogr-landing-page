import React from "react";
import styles from "./style.module.scss";

interface Props {}
const Footer: React.FC<Props> = () => {
	return (
		<footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.top}>
					<div className={styles.logo_details}>
						<span className={styles.logo_name}>Blogr</span>
					</div>
                        <ul className={styles.box}>
                            <li className={styles.link_name}>Product</li>
                            <li>
                                <a href="#">Overview</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">MarketPlace</a>
                            </li>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Integration</a>
                            </li>
                        </ul>
                        <ul className={styles.box}>
                            <li className={styles.link_name}>Company</li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Team</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                        </ul>
                        <ul className={styles.box}>
                            <li className={styles.link_name}>Connect</li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Newsletter</a>
                            </li>
                            <li>
                                <a href="#">Linkedin</a>
                            </li>
                            
                        </ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
