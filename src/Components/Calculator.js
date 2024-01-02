const Calculator = ({PropNum1 ,PropHandleClickSetNum1}) => {

    return (
        <div>

            <h1 className="">salam</h1>
            <input value={PropNum1} onChange={(e) => setNum1(e.target.value)} placeholder="grtNum1"></input>
            <input value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="getNum2"></input>
            <input value={result} placeholder="showResult"></input>

            <button onClick={PropHandleClickSetNum1} >getNum1</button>
            <button onClick={handleClickSetNum2}> getNum2</button>
            <button onClick={handleClickPlus}>Plus</button>
            <button onClick={handleClickMultiplication}>Mutiplication</button>
            <button onClick={handleClickDevision}>Devision</button>
            <button onClick={handleClickMinus}>Miuns</button>

            <button onClick={handleClickShowResultDivision}>ShowResultDivision</button>
            <button onClick={handleClickShowResultMinus}>ShowResultMinus</button>.
            <button onClick={handleClickShowResultPluse}>ShowResultPluse</button>
            <button onClick={handleClickShowResultMultiplication}>ShowResultMultiplication</button>
            <button onClick={handleClickShowNum1} >ShowNum1</button>
            <button onClick={handleClickShowNum2}>ShowNum2</button>


        </div>
    )
}

export default Calculator