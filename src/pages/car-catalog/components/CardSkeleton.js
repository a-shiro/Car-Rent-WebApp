export const CardSkeleton = () => {
  return [...Array(9)].map(() => (
    <div className="card-skeleton-catalog">
      <div className="card-checkers"></div>
      <span></span>
      <span></span>
    </div>
  ));
};
