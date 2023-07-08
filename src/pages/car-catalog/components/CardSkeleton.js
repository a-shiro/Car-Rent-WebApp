export const CardSkeleton = () => {
  return [...Array(9)].map((x, i) => (
    <div className="card-skeleton-catalog" key={i}>
      <div className="card-checkers"></div>
      <span></span>
      <span></span>
    </div>
  ));
};
