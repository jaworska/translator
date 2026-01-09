import { useState } from "react";
import styles from "./Item.module.css";
export function Item({ word, translation, id, onDeleteClick }) {
  const [isTranslationShown, setIsTranslationShown] = useState(false);

  function handleDeleteClick() {
    onDeleteClick(id);
  }

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <div className={styles.wordGroup}>
          <span className={styles.label}>🇵🇱 Polski</span>
          <span className={styles.wordText}>{word}</span>
        </div>
        <div className={styles.wordGroup}>
          <span className={styles.label}>🇬🇧 Angielski</span>
          <span className={styles.wordText}>
            {isTranslationShown ? translation : "••••••"}
          </span>
        </div>
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() => setIsTranslationShown((prevValue) => !prevValue)}
          className={styles.button}
          title={isTranslationShown ? "Ukryj tłumaczenie" : "Pokaż tłumaczenie"}
        >
          {isTranslationShown ? "🙈" : "👁️"}
        </button>
        <button
          onClick={handleDeleteClick}
          className={styles.button}
          title="Usuń słówko"
        >
          🗑️
        </button>
      </div>
    </li>
  );
}
