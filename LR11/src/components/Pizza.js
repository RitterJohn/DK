import React from "react";
import { useState } from "react";

function Pizza(props) {

    const [counter, setCounter] = useState(0);

    function increment () {
        setCounter(counter + 1);
    }

    function decrement () {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    function mess() {
        if (counter == 0) {
            alert(`Укажите количество товара`)
        }
        else {
            alert(`Количество заказанного товара: ${counter}`)
        }
        
    }

    return (
        <div className="block">
            <img className="pic" src={props.img} alt="pic" />
            <div className="text">
                <h3>{props.title}</h3>
                <p className="desc">{props.desc}</p>
                <select>
                    <option value="">Диаметр</option>
                    <option value="25">25 см</option>
                    <option value="30">30 см</option>
                    <option value="35">35 см</option>
                </select>
                <p className="cost">от {props.cost} ₽</p>
                <div className="sale">
                    <button className="btn" onClick={decrement}>-</button>
                    <div className="count">{counter}</div>
                    <button className="btn" onClick={increment}>+</button>
                    <button className="buy" id="btn2" onClick={mess}>В корзину</button>
                </div>
            </div>
        </div>
    );
}

export default Pizza;