import './CardList.css';
import icon from './check-circle.png';

interface CardListProps {
  items: Array<string>;
}

function CardList(props: CardListProps) {
  const items = props.items;
  const listItems = items.map((item, index) => (
    <li key={index}>
      <img src={icon} alt={'icon'} className="list-icon" />
      {item}
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default CardList;
