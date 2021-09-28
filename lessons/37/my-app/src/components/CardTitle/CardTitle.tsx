import './CardTitle.css';

interface CardTitleProps {
  text: string;
}

function CardTitle(props: CardTitleProps) {
  return <h2 className="card-item__title">{props.text}</h2>;
}

export default CardTitle;
