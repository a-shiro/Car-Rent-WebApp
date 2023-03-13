export const Article = ({ sectionImg, sectionText }) => {
  return (
    <article>
      <img src={sectionImg} alt="" />
      <p>{sectionText}</p>
    </article>
  );
};
