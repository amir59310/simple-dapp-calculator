const Calculator = ({ //Props
    PropNum1, PropNum2, PropSetNum1, PropSetNum2, PropResult,
    PropHandleClickSetNum1, PropHandleClickSetNum2, PropHnadleClickPlus,
    PropHandleClickDevision, PropHandleClickMinus, PropHandleClickMultiplication,
    PropHandleShowResultDivision, PropHandleShowResultMinus, PropHandleShowResultPluse,
    PropHandleShowResultMultiplication, PropHandleClickShowNum1, PropHandleClickShowNum2 }) => {

    return (

        <div>
            <div>salammmmmmm</div>
            <h1 className="">salam</h1>
            <input value={PropNum1} onChange={(e) => PropSetNum1(e.target.value)} placeholder="grtNum1"></input>
            <input value={PropNum2} onChange={(e) => PropSetNum2(e.target.value)} placeholder="getNum2"></input>
            <input value={PropResult} placeholder="showResult"></input>

            <button onClick={PropHandleClickSetNum1} >getNum1</button>
            <button onClick={PropHandleClickSetNum2}> getNum2</button>
            <button onClick={PropHnadleClickPlus}>Plus</button>
            <button onClick={PropHandleClickMultiplication}>Mutiplication</button>
            <button onClick={PropHandleClickDevision}>Devision</button>
            <button onClick={PropHandleClickMinus}>Miuns</button>

            <button onClick={PropHandleShowResultDivision}>ShowResultDivision</button>
            <button onClick={PropHandleShowResultMinus}>ShowResultMinus</button>.
            <button onClick={PropHandleShowResultPluse}>ShowResultPluse</button>
            <button onClick={PropHandleShowResultMultiplication}>ShowResultMultiplication</button>
            <button onClick={PropHandleClickShowNum1} >ShowNum1</button>
            <button onClick={PropHandleClickShowNum2}>ShowNum2</button>


        </div>
    )
}

export default Calculator