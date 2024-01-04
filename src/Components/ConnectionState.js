import { useEffect, useState } from "react"


const ConnectionState = ({ viewWalletState }) => {

    const [svgColor, setSvgColor] = useState("#c50909")

    useEffect(() => {
        if (viewWalletState === "CONNECTED") {
            setSvgColor("#1e582b")
        }
        else {
            setSvgColor("#c50909")
        }


    }, [viewWalletState])

    return (
        <div className=" flex items-center justify-center drop-shadow-[0px_3px_4px_rgba(0,50,0,0.7)] ">
            <span className="bg-[#d7c6ff8a]  text-[#111a31]  px-2 pb-1 pt-0 rounded-b-xl flex items-center   "><svg width="15" height="15" className="mt-[0.45rem] mr-1 blur-sm animate-pulse ">
                <circle cx="5" cy="5" r="5" fill={svgColor}> </circle>
            </svg>{viewWalletState}</span>
        </div>
    )

}

export default ConnectionState;