function Banner({ background, children }) {
  return (
    <div className="banner">
      <img className="background" src={background} alt="" />
      <div className="filter"></div>
      <div className="slogan">{children}</div>
    </div>
  );
}

export default Banner;
