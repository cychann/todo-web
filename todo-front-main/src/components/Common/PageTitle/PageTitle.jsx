import React from "react";
import styles from "./PageTitle.module.css";

export default function PageTitle({ title = "Todo" }) {
  return <h1 className={styles.title}>{title}</h1>;
}
