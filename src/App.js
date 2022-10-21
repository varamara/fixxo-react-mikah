import './App.min.css';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Showcase_2 from './components/Showcase_2';
import Featured_products_1 from './components/Featured_products_1';
import Featured_products_2 from './components/Featured_products_2';
import Support from './components/Support';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar />
    <Showcase />
    <Showcase_2 />
    <Featured_products_1 />
    <Featured_products_2 />
    <Support />
    <Footer />

    <div style={{"height": "5000px"}}></div>
    </>
     
  );
}

export default App;
