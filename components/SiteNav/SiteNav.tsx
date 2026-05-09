import styles from "./SiteNav.module.scss";

export function SiteNav() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <span className={styles.brand}>Polaroid I-2</span>
      <div className={styles.links}>
        <a className={styles.link} href="#discover">
          Discover
        </a>
        <a className={styles.link} href="#buy">
          Buy
        </a>
      </div>
    </nav>
  );
}
