import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";

const BookItem = ({ titleProp, author, pageCount, rating, imageUrl }) => {
  const [title, setTitle] = useState(titleProp);

  const [count, setCount] = useState(0);

  const clickHandle = () => {
    setTitle("Actualizado");
  };

  const incrementHandle = () => {
    setCount(count + 10);
  }

  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>{rating} estrellas</div>
        <p>{pageCount} páginas</p>
        <p>Clicks: {count}</p>
        <Button variant="primary" onClick={clickHandle}>
          Actualizar
        </Button>
        <Button variant="primary" onClick={incrementHandle}>
          +
        </Button>
      </Card.Body>
    </Card>
  );
};

BookItem.propTypes = {
  titleProp: PropTypes.string,
  author: PropTypes.string,
  pageCount: PropTypes.number,
  rating: PropTypes.number,
  imageUrl: PropTypes.string,
};

export default BookItem;
