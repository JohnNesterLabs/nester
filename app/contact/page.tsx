"use client";

import { useState } from "react";
import styles from "../page.module.css";
import contactStyles from "./contact.module.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <main className={styles.main}>
      <SiteHeader variant="dark" />
      
      <section className={contactStyles.contactSection}>
        <div className={contactStyles.contactContainer}>
          <div className={contactStyles.contactInfo}>
            <h1 className={contactStyles.contactTitle}>Let&apos;s Talk</h1>
            
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
                701 LAKEWAY DR #200, SUNNYVALE CA 94085, USA
              </p>
            </div>
          </div>

          <div className={contactStyles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={contactStyles.formGroup}>
                <label htmlFor="name" className={contactStyles.formLabel}>Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={handleChange}
                  className={contactStyles.formInput}
                  required
                />
              </div>

              <div className={contactStyles.formGroup}>
                <label htmlFor="email" className={contactStyles.formLabel}>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="jane@framer.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={contactStyles.formInput}
                  required
                />
              </div>

              <div className={contactStyles.formGroup}>
                <label htmlFor="message" className={contactStyles.formLabel}>Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Send a message"
                  value={formData.message}
                  onChange={handleChange}
                  className={contactStyles.formTextarea}
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className={contactStyles.submitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

