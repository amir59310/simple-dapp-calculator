const Calculator = ({ //Props
    PropNum1, PropNum2, PropSetNum1, PropSetNum2, PropResult,
    PropHandleClickSetNum1, PropHandleClickSetNum2, PropHnadleClickPlus,
    PropHandleClickDevision, PropHandleClickMinus, PropHandleClickMultiplication,
    PropHandleShowResultDivision, PropHandleShowResultMinus, PropHandleShowResultPluse,
    PropHandleShowResultMultiplication }) => {

    return (

        <div className="bg-[#a1a4d66e]  drop-shadow-[0px_1px_20px_rgba(0,6,0,0.5)] rounded-xl pt-4 px-5 " >
            <div className="">
                <label className="text-[#191825] font-mono font-bold text-sm ml-4 ">
                    Please Set Number
                </label>
            </div>
            <div className="flex items-center justify-center pb-2 gap-3" >

                <input type="number" value={PropNum1} onChange={(e) => PropSetNum1(e.target.value)} className="bg-[#a1a4d6] rounded-[0.4rem] px-1 py- dark:text-slate-700  ring-0 focus:outline-none w-[9rem] focus:drop-shadow-[0px_1px_3px_rgba(0,50,0,0.35)]"></input>

                <button onClick={PropHandleClickSetNum1} className=" bg-[#a1a4d6] text-xs font-mono font-bold py-[0.28rem] px-2 rounded-[0.4rem] text-[#4d497c] " >SET</button>
            </div>
            <div className="flex items-center justify-center pb-2 gap-3">
                <input size={10} value={PropNum2} onChange={(e) => PropSetNum2(e.target.value)} placeholder="" className="
                bg-[#a1a4d6] rounded-[0.4rem] px-1  dark:text-slate-700  ring-0 focus:outline-none
                w-[9rem]"></input>
                <button onClick={PropHandleClickSetNum2} className="bg-[#a1a4d6] text-xs text-[#4d497c] font-mono 
                font-bold py-[0.28rem] px-2 rounded-[0.4rem]"> SET</button>
            </div>

            <div className="py-4">
                <div className="">
                    <label className="text-[#191825] font-mono text-sm font-bold ">
                        Calculation Result
                    </label>
                </div>

                <div className="flex items-center justify-center pb-4 ">
                    <input value={PropResult} placeholder="showResult" className=" 
                rounded-[0.4rem] bg-[#a1a4d6] px-1  dark:text-slate-700  ring-0 focus:outline-none
                w-[14rem]  "></input>
                </div>
            </div>

            <div className="bg-[#a1a4d688] rounded-xl flex flex-col items-center">
                <div>
                    <label className="text-[#191825] font-mono text-xs font-bold tracking-tight ">Computational Operators</label>
                </div>

                <div className="flex items-center justify-center gap-3 pt-1 pb-3">

                    <button onClick={PropHandleClickMultiplication} className="bg-[#adafe9] text-center px-[0.8rem] pb-1 rounded-[0.6rem] 
                    drop-shadow-[0px_3px_4px_rgba(0,50,0,0.25)] ">×</button>
                    <button onClick={PropHandleClickDevision} className="bg-[#adafe9] pb-1 px-[0.8rem] rounded-[0.6rem]
                    drop-shadow-[0px_3px_4px_rgba(0,50,0,0.25)] ">÷</button>
                    <button onClick={PropHnadleClickPlus} className="
                    bg-[#adafe9] px-[0.8rem] pb-1 rounded-[0.6rem] 
                    drop-shadow-[0px_3px_4px_rgba(0,50,0,0.25)]">+</button>
                    <button onClick={PropHandleClickMinus} className="bg-[#adafe9] px-[0.8rem] pb-[0.3rem] rounded-[0.6rem]
                    drop-shadow-[0px_3px_4px_rgba(0,50,0,0.25)]" >−</button>
                </div>

            </div>


            <div className="bg-[#a1a4d688] rounded-xl flex flex-col items-center mt-4 mb-5 gap-1">
                <div>
                    <label className="text-[#191825] font-mono text-xs font-bold tracking-tight ">Calculation Result Operators</label>
                </div>
                <div className="flex items-center justify-center gap-[0.7rem] pb-3 ">
                    <button onClick={PropHandleShowResultDivision} className="bg-[#a1a4d6] text-xs font-mono font-bold px-[0.5rem] py-[0.3rem] rounded-[0.5rem]">
                        R<span className="bg-[#7f81ac] ml-1 text-center px-[0.3rem] pb-[0.1rem] font-bold rounded-full">×</span></button>
                    <button onClick={PropHandleShowResultMinus} className="bg-[#a1a4d6] text-xs font-mono font-bold px-[0.5rem] py-[0.3rem] rounded-[0.5rem]">
                        R<span className="bg-[#7f81ac] ml-1 text-center px-[0.3rem] pb-[0.1rem] rounded-full">–</span></button>
                    <button onClick={PropHandleShowResultPluse} className="bg-[#a1a4d6] text-xs font-mono font-bold px-[0.5rem] py-[0.3rem] rounded-[0.5rem]">
                        R<span className="bg-[#7f81ac] ml-1 text-center px-[0.3rem] pb-[0.1rem] rounded-full">+</span></button>
                    <button onClick={PropHandleShowResultMultiplication} className="bg-[#a1a4d6] text-xs font-mono font-bold px-[0.5rem] py-[0.3rem] rounded-[0.5rem]">
                        R<span className="bg-[#7f81ac] ml-1  text-center px-[0.3rem] pb-[0.1rem] font-bold rounded-full">×</span></button>

                </div>
            </div>









        </div >
    )
}

export default Calculator