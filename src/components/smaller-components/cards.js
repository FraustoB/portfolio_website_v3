const Cards = ({ title, tagline, info }) => {
  return (
    <div className="card text-white bg-dark mb-3 cdardle">
      <h4 className="card-header">{title}</h4>
      <div className="card-body">
        <div className="card-title">{tagline}</div>
        <p className="card-text">{info}</p>
      </div>
    </div>
  );
};

export default Cards;
