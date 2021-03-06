import "./cards.scss";

const Cards = ({ title, tagline, info }) => {
  return (
    <div className="card text-white bg-dark mb-3 cdardle cards-hover">
      <h4 className="card-header">{title}</h4>
      <div className="card-body">
        <div className="card-title">
          <b>
            <i>{tagline}</i>
          </b>
        </div>
        <p className="card-text">{info}</p>
      </div>
    </div>
  );
};

export default Cards;
