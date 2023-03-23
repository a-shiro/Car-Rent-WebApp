import styles from "../About.module.css";

export const Article = ({ sectionTitle, sectionText }) => {
  return (
    <article className={styles.Article}>
      <h1 className={styles.ArticleTitle}>{sectionTitle}</h1>
      <p>{sectionText}</p>
    </article>
  );
};
