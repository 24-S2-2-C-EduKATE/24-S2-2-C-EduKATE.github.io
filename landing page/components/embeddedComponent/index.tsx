import styles from './style.module.css'

export function EmbeddedComponent({
    link,
    children
  }) {
    return (
        <div className={styles["iframe-container"]}>
            <iframe src={link} className={styles.iframe}>
                {children}
            </iframe>
        </div>
    )
  }