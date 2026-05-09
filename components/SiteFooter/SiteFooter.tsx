import styles from "./SiteFooter.module.scss";

const rightLinks = [
  {
    col: [
      "Gift Cards",
      "About Us",
      "Collaborations",
      "More Products",
      "Careers",
      "Contact Us",
    ],
  },
  {
    col: [
      "Affiliate Program",
      "Our Brands",
      "Polaroid Loyalty Program",
      "Customer Service",
    ],
  },
];

const legalLinks = [
  "Terms of Use Website",
  "Online Purchase Conditions",
  "Review Terms & Conditions",
  "Product Recalls",
  "US Social Responsibility",
  "Privacy Policy",
  "Cookie Policy",
  "Content Sharing Policy",
  "Accessibility",
  "Gift Card Conditions",
  "Loyalty Terms",
  "Film Subscription Terms",
  "Warranty Policy",
  "Polaroid Sale",
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      {/* Top section */}
      <div className={styles.top}>
        <div className={styles.left}>
          <p className={styles.headline}>We&apos;re here to help.</p>
          <p className={styles.subline}>
            <a href="#" className={styles.contactLink}>Get in touch</a> with our customer service team.
          </p>
          <div className={styles.regionWrapper}>
            <select className={styles.regionSelect} defaultValue="eu">
              <option value="eu">Europe &amp; Rest of World, €EUR</option>
              <option value="us">United States, $USD</option>
            </select>
          </div>
        </div>

        <div className={styles.right}>
          {rightLinks.map((group, gi) => (
            <ul key={gi} className={styles.linkCol}>
              {group.col.map((item) => (
                <li key={item}>
                  <a href="#" className={styles.link}>{item}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.legalLinks}>
          {legalLinks.map((item) => (
            <a key={item} href="#" className={styles.legalLink}>{item}</a>
          ))}
        </div>
        <div className={styles.social}>
          {/* Twitter/X */}
          <a href="#" className={styles.socialIcon} aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
          {/* YouTube */}
          <a href="#" className={styles.socialIcon} aria-label="YouTube">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>©{new Date().getFullYear()} Polaroid. All rights reserved.</p>
      </div>

      {/* Help button */}
      <button className={styles.helpButton} aria-label="Help">
        ?
      </button>
    </footer>
  );
}
