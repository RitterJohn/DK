import Pizza from "./components/Pizza.js";
import img1 from "./components/img/f1.jpg";

function App() {
  return (
    <Pizza title="Пепперони" desc="Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла" cost="550" img={img1}/>
  );
}

export default App;
