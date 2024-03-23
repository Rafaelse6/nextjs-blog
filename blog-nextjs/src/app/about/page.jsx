import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}></div>
      <Image src="/about.png" alt="" fill />
    </div>
  );
};

export default AboutPage;
