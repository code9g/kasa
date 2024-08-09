function Host({ name, picture }) {
  return (
    <div className="host">
      <div className="fullname">{name}</div>
      <img className="avatar" src={picture} alt="" />
    </div>
  );
}

export default Host;
