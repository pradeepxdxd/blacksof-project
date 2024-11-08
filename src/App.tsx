import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/ui/header/Header";
import Ecosystem from "./components/ecosystem/Ecosystem";
import Product from "./components/product/Product";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Ecosystem />
      <Product />
      <Content />
      <Footer />
    </>
  );
}

export default App;
