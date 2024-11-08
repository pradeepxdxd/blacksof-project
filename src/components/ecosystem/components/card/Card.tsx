import "./Card.css";

interface CardProp {
  images: string[];
  title: string;
  description: string;
  rules: {
    doubleBorder: boolean;
  };
}

const Card: React.FC<CardProp> = ({ images, description, title, rules }) => {
  return (
    <div className="d-flex" style={{ flexDirection: "column" }}>
      <div className="d-flex mx-2 justify-content-center">
        {images &&
          images.length > 0 &&
          images.map((image, index) => (
            <div
              key={index}
              className={
                rules.doubleBorder ? "img-double-border" : "img-border"
              }
            >
              <img
                className={rules.doubleBorder ? "card-img" : "border-card-img"}
                src={image}
                alt="street-light-controller"
              />
            </div>
          ))}
      </div>
      <h6 className="my-2 card-title text-center">{title}</h6>
      <div className="card-desc-div">
        <h5 className="card-desc text-center">{description}</h5>
      </div>
    </div>
  );
};

export default Card;
