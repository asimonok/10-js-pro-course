import './Button.css';

interface ButtonProps {
  name: string;
  text: string;
}

function Button(props: ButtonProps) {
  function showChoosenPlan() {
    console.log(props.name);
  }
  return (
    <button className="App-button" onClick={showChoosenPlan}>
      {props.text}
    </button>
  );
}

export default Button;
