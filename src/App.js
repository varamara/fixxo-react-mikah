import './App.min.css';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Showcase_2 from './components/Showcase_2';
import Featured_products_1 from './components/Featured_products_1';
import Featured_products_2 from './components/Featured_products_2';

function App() {
  return (
    <>
    <Navbar />
    <Showcase />
    <Showcase_2 />
    <Featured_products_1 />
    <Featured_products_2 />
    <div style={{"height": "5000px"}}></div>
    </>
     
  );
}

export default App;
