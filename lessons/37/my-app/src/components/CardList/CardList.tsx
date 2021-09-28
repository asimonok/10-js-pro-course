import './CardList.css';

interface CardListProps {
  items: Array<string>;
}

function CardList(props: CardListProps) {
  const items = props.items;
  const listItems = items.map((item, index) => <li key={index}>{item}</li>);
  return <ul>{listItems}</ul>;
}

export default CardList;
