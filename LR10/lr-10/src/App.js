import Block from "./components/Block";
import img1 from "./components/img/f3.png";
import img2 from './components/img/f4.png';
import img3 from './components/img/f5.png';

function App() {
  return (
    <div className="container">
      <h2 className="main_title">Что Вам необходимо?</h2>
        <div className="main_block">
          <Block title="Первый блок" img={img1} text="Lorem ipsum dolor sit amet consectetur, adipisicing elit"/>
          <Block title="Второй блок" img={img2} text="Lorem ipsum dolor sit amet consectetur, adipisicing elit"/>
          <Block title="Третий блок" img={img3} text="Lorem ipsum dolor sit amet consectetur, adipisicing elit"/>
        </div>
    </div>
  );
}

export default App;
