const Calculator = ({ //Props
    PropNum1, PropNum2, PropSetNum1, PropSetNum2, PropResult,
    PropHandleClickSetNum1, PropHandleClickSetNum2, PropHnadleClickPlus,
    PropHandleClickDevision, PropHandleClickMinus, PropHandleClickMultiplication,
    PropHandleShowResultDivision, PropHandleShowResultMinus, PropHandleShowResultPluse,
    PropHandleShowResultMultiplication, PropHandleClickShowNum1, PropHandleClickShowNum2 }) => {

    return (

        <div className="bg-gray-200 rounded-xl pt-4 px-3" >
            <div className="flex items-center justify-center">
                <input size={10} value={PropNum1} onChange={(e) => PropSetNum1(e.target.value)} placeholder="grtNum1"
                    className="bg-gray-300"></input>
                <button onClick={PropHandleClickSetNum1} >getNum1</button>
            </div>
            <div className="flex items-center justify-center">
                <input size={10} value={PropNum2} onChange={(e) => PropSetNum2(e.target.value)} placeholder="getNum2"></input>
                <button onClick={PropHandleClickSetNum2}> getNum2</button>
            </div>

            <div className="flex items-center justify-center">
                <input value={PropResult} placeholder="showResult"></input>
            </div>
            <div className="flex items-center justify-center">
                <button onClick={PropHnadleClickPlus} className="
                ">+</button>
                <button onClick={PropHandleClickMultiplication}>*</button>
                <button onClick={PropHandleClickDevision}>/</button>
                <button onClick={PropHandleClickMinus}>-</button>
            </div>
            <div className="flex items-center justify-center ">
                <button onClick={PropHandleShowResultDivision}>ResultDivision</button>
                <button onClick={PropHandleShowResultMinus}>ResultMinus</button>

            </div>
            <div className="flex items-center justify-center">
                <button onClick={PropHandleShowResultPluse}>ResultPluse</button>
                <button onClick={PropHandleShowResultMultiplication}>ResultMultiplication</button>
            </div>
            <div className="flex items-center justify-center">
                <button onClick={PropHandleClickShowNum1} >ShowNum1</button>
                <button onClick={PropHandleClickShowNum2}>ShowNum2</button>
            </div>



        </div>
    )
}

export default Calculator