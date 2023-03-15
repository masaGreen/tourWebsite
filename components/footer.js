import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <div className={styles.footerdiv}>
          <a href="https://goo.gl/maps/YcJHhRNJhnUUomSL6">
            <h2>Kerugoya Town</h2>
          </a>
          <p>Opposite Kerugoya Level 5 , 3rd floor Wing A. Mutitu Road</p>
          <strong>Call </strong>
          <h4>+254123456</h4>
        </div>
        <div className={styles.footerdiv}>
          <a href="https://goo.gl/maps/YcJHhRNJhnUUomSL6">
            <h2>Kerugoya Town</h2>
          </a>
          <p>Opposite Kerugoya Level 5 , 3rd floor Wing A. Mutitu Road</p>
          <strong>Call </strong>
          <h4>+254123456</h4>
        </div>
        <div className={styles.footerdiv}>
          <a href="https://goo.gl/maps/YcJHhRNJhnUUomSL6">
            <h2>Kerugoya Town</h2>
          </a>
          <p>Opposite Kerugoya Level 5 , 3rd floor Wing A. Mutitu Road</p>
          <strong>Call </strong>
          <h4>+254123456</h4>
        </div>
       
      </section>
      <div className={styles.copy}>
      <p className={styles.copyp}>
        copyright &copy; 2023
      </p>
      </div>
    </main>
  );
}
