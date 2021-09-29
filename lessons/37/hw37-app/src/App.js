import './App.css';
import Title from './components/Title';
import Card from './components/Card';
import CardR from './components/CardR';
import GreenCard from './components/GreenCard';


function App() {
  // const title1 = 'Day Pass';
  // const title2 = 'Monthly Pass';
  return (
    <>
      <Title />
      <div className="container">
        <GreenCard />
        <Card name="Day Pass" />
        <CardR name="Monthly Pass" />
      </div>
    </>
    )
}

export default App;
