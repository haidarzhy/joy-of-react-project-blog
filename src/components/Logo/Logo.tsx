import React from "react";
import Link from "next/link";

import styles from "./Logo.module.css";
import { BLOG_TITLE } from "../../constants";

function Logo({ mobileAlignment = "left" }) {
  return (
    <Link
      href="/"
      className={styles.wrapper}
      data-mobile-alignment={mobileAlignment}
    >
      {BLOG_TITLE}
    </Link>
  );
}

export default Logo;
