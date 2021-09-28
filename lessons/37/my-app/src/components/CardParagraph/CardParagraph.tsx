import './CardParagraph.css';

interface CardParagraphProps {
  text: string;
}

function CardParagraph(props: CardParagraphProps) {
  return <p>{props.text}</p>;
}

export default CardParagraph;
