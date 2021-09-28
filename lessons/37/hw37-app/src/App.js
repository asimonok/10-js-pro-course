import './App.css';
import Title from './components/Title';
import Card from './components/Card';

function App() {
  return (
    <>
      <Title />
      <div className="container">
        <Card />
        <Card />
        <Card />
      </div>
    </>
    )
}

export default App;
