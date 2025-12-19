"use client";

import styles from "../page.module.css";
import contactStyles from "./contact.module.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <SiteHeader variant="dark" />
      
      <section className={contactStyles.contactSection}>
        <h1 className={contactStyles.contactTitle}>Let&apos;s Talk</h1>
        <div className={contactStyles.contactContainer}>
          <div className={contactStyles.contactInfo}>
            
            <div className={contactStyles.contactItem}>
              <p className={contactStyles.contactLabel}>Send an email</p>
              <a href="mailto:contact@nesterlabs.com" className={contactStyles.contactValue}>
                CONTACT@NESTERLABS.COM
              </a>
            </div>

            <div className={contactStyles.contactItem}>
              <p className={contactStyles.contactLabel}>Phone</p>
              <a href="tel:+14086731340" className={contactStyles.contactValue}>
                +1 (408) 673-1340
              </a>
            </div>

            <div className={contactStyles.contactItem}>
              <p className={contactStyles.contactLabel}>Location</p>
              <p className={contactStyles.contactValue}>
                701 LAKEWAY DR #200,
              </p>
              <p className={contactStyles.contactValue}>
                SUNNYVALE CA 94085 ,
              </p>
              <p className={contactStyles.contactValue}>
                USA
              </p>
            </div>
          </div>

          <div className={contactStyles.contactForm}>
            <div className={contactStyles.tallyEmbedWrapper}>
              <iframe
                src="https://tally.so/embed/VLjZkM?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&hideBranding=1"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contact Form"
                className={contactStyles.tallyEmbed}
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

