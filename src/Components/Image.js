import { Link } from "react-router-dom";

const Image = (props) => {
  return (
    <Link to={`/store/${props.id}`}>
      <img alt="cat" src={props.src} />
    </Link>
  );
};

export default Image;
