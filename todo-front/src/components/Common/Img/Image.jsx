import React from "react";
import styles from "./Image.module.css";

export default function Image({
  src,
  alt = "image alt",
  width = 16,
  height = 16,
}) {
  const imgStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return <img src={src} alt={alt} style={imgStyle} className={styles.image} />;
}
