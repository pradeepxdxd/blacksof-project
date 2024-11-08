import contentIcon from "../../../../assets/content-icon.png";

const Card: React.FC<{ content: string; rule: { width: number } }> = ({
  content,
  rule,
}) => {
  return (
    <div>
      <img
        src={contentIcon}
        alt="contentIcon"
        style={{ width: "50px", height: "50px" }}
      />
      <h5
        className="my-3"
        style={{ fontFamily: "sans-serif", maxWidth: `${rule.width}px` }}
      >
        {content}
      </h5>
    </div>
  );
};

export default Card;
