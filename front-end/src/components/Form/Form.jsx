import { useState, useEffect, useRef } from "react";
import styles from "./Form.module.css";
import { Button } from "../Button/Button";

export function Form({ onFormSubmit }) {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [category, setCategory] = useState("noun");
  const debounceTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      word,
      translation,
      category,
    };

    onFormSubmit(newItem);
  }

  function handleWordChange(value) {
    setWord(value);

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (!value.trim()) {
      setTranslation("");
      return;
    }

    debounceTimer.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
            value
          )}&langpair=pl|en`
        );

        const data = await res.json();

        if (data.responseStatus === 200 && data.responseData) {
          setTranslation(data.responseData.translatedText);
        }
      } catch (error) {
        console.error("Translation error:", error);
      }
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>✨ Dodaj nowe słowo</h3>

      <div className={styles.row}>
        <div className={styles.cell}>
          <label htmlFor="word" className={styles.label}>
            Słowo
          </label>
          <input
            type="text"
            id="word"
            className={styles.input}
            value={word}
            onChange={(e) => handleWordChange(e.target.value)}
            placeholder="np. dom"
          />
        </div>
        <div className={styles.cell}>
          <label htmlFor="translation" className={styles.label}>
            Tłumaczenie
          </label>
          <input
            type="text"
            id="translation"
            className={styles.input}
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
            placeholder="np. house"
          />
        </div>
      </div>

      <div className={styles.categorySection}>
        <label className={styles.label}>Kategoria:</label>
        <div className={styles.radioGroup}>
          <label
            className={`${styles.radioLabel} ${
              category === "noun" ? styles.radioLabelActive : ""
            }`}
          >
            <input
              type="radio"
              name="category"
              id="category-noun"
              className={styles.radioInput}
              checked={category === "noun"}
              onChange={() => setCategory("noun")}
            />
            <span className={styles.radioText}>📚 Rzeczownik</span>
          </label>
          <label
            className={`${styles.radioLabel} ${
              category === "verb" ? styles.radioLabelActive : ""
            }`}
          >
            <input
              type="radio"
              name="category"
              id="category-verb"
              className={styles.radioInput}
              checked={category === "verb"}
              onChange={() => setCategory("verb")}
            />
            <span className={styles.radioText}>⚡ Czasownik</span>
          </label>
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <Button>Dodaj słowo</Button>
      </div>
    </form>
  );
}
