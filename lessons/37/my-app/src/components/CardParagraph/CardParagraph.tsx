import './CardParagraph.css';

interface CardParagraphProps {
  text: string;
  price?: number;
}

function CardParagraph(props: CardParagraphProps) {
  return <p>{props.text}</p>;
}

export default CardParagraph;
