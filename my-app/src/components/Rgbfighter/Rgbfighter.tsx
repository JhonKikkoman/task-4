import { useState } from "react";
import { handlerChangeType } from "../models";

export default function Rgbconverter() {
    const [state, setState] = useState('');
    const [stateSubmit, setStateSumbit] = useState('');

    const handlerSubmit = (e: any): void => {
        e.preventDefault();
        const hexValue: string = state.replace('#', '');
        const red: number = parseInt(hexValue.substring(0, 2), 16);
        const green: number = parseInt(hexValue.substring(2, 4), 16);
        const blue: number = parseInt(hexValue.substring(4, 6), 16);

        if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue)) {
            setStateSumbit('Ошибка ввода!')
        } else {
            setStateSumbit(`rgb(${red}, ${green}, ${blue})`)
        }
    }

    const handlerChange = ({ target }: handlerChangeType): void => {
        const { value } = target;
        if (value.length > 7) {
            setStateSumbit('Не корректный ввод!')
        } else {
            setState(value);
        }
    }

    return (
        <>
            <style>{`body {background-color: ${stateSubmit}}`}</style>
            <div className="container">
                <form onSubmit={handlerSubmit} action="">
                    <input className="input_text" onChange={handlerChange} name="input_name" value={state} type="text" placeholder="Введите RGB значение" />
                    <div className="result_hex">{stateSubmit}</div>
                </form>
            </div>
        </>
    );
}