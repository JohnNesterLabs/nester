"use client";

import styles from "./Loader.module.css";

/**
 * Loader Component
 * 
 * A lightweight full-screen spinner loader used throughout the application
 * for initial loading states, navigation transitions, and iframe loading.
 */
export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner} />
    </div>
  );
}

