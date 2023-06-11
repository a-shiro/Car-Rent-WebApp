const HeroCard = ({
  title,
  subtitle,
  sectionRef,
  icon,
  iconLink,
  iconText,
}) => {
  const clickHandler = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-card-about" onClick={clickHandler}>
      <div className="hero-card-icon-wrapper-about">
        <img className="hero-card-icon-about" src={icon} />
      </div>
      <span>{title}</span>
      <p>{subtitle}</p>
      <a href={iconLink}>{iconText}</a>
    </div>
  );
};

export default HeroCard;
