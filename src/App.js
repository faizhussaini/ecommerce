import logo from './logo.svg';
import './App.css';
import NabBar from './Componen/Header/NabBar';
const productsArr = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

},

{

title: 'Blue Color',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

}

]


function App() {
  return (
    <div >
    <header>
    </header>
    {productsArr.map(items=><div>
      <span>{items.title}</span>
       <img src={items.imageUrl}/>
      <span>{items.price}</span>
      </div>)}
    </div>
  );
}

export default App;
