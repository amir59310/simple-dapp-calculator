import { ethers } from "ethers";
import abi from "./abi/abi.json";
import { useEffect, useState } from "react";
import {
  handleSetNum1, handleSetNum2, handleDevision, handleResultDivision,
  handleMinus, handleResultMinus, handlePlus, handleResultPluse, handleMultiplication,
  handleResultMultiplication,
} from "./modules/handller_Opration";

import Background_xs from "./Components/Background_xs";
import Calculator from "./Components/Calculator";
import { ToastContainer, toast } from 'react-toastify';
import ConnectionState from "./Components/ConnectionState";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [contract, setContract] = useState(null);
  const [WalletState , setWalletState] = useState("DISCONNECTED");    

  useEffect(() => {
    const init = async () => {
      try {
        ///@dev provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

        if(accounts.length > 0){
          setWalletState("CONNECTED");
        }else{
          setWalletState("DISCONNECTED");
        }

        const signer = provider.getSigner();


        ///@dev contract 
        const contractAddress = "0xC491fb3B57CAf2FdFFB70bc29595dE9439b4ae3b";
        abi = abi;

        ///@Create Instance
        const contract = new ethers.Contract(contractAddress, abi, signer)
        setContract(contract);


      } catch (error) {
        console.error('Error Inintializing', error);
      }
    }
    init();
  })
  //Hnadller OPRATION
  const handleClickSetNum1 = async () => {
    
    await handleSetNum1(contract, num1);
    
  };

  const handleClickSetNum2 = async () => {
    await handleSetNum2(contract, num2);
  }


  const handleClickPlus = async () => {
    await handlePlus(contract);
  }

  const handleClickMinus = async () => {
    await handleMinus(contract);
  }

  const handleClickMultiplication = async () => {
    await handleMultiplication(contract);
  }

  const handleClickDevision = async () => {
    await handleDevision(contract);
  }

  const handleClickShowResultDivision = async () => {
    await handleResultDivision(contract, setResult);
  }

  const handleClickShowResultMultiplication = async () => {
    await handleResultMultiplication(contract, setResult);
  }

  const handleClickShowResultMinus = async () => {
    await handleResultMinus(contract, setResult);
  }

  const handleClickShowResultPluse = async () => {
    await handleResultPluse(contract, setResult);
  }
  return (

    <>
      <div className=" relative min-h-screen">
        <div className=" absolute inset-0">
          <ConnectionState viewWalletState={WalletState} />
        </div>
        <div className="" >
          <ToastContainer />
        </div>
        <Background_xs />
        <div className="absolute inset-0 flex items-center justify-center ">

          <Calculator
            PropHandleClickSetNum1={handleClickSetNum1}
            PropHandleClickSetNum2={handleClickSetNum2}
            PropSetNum1={setNum1}
            PropSetNum2={setNum2}
            PropNum2={num2}
            PropNum1={num1}
            PropResult={result}
            PropHnadleClickPlus={handleClickPlus}
            PropHandleClickDevision={handleClickDevision}
            PropHandleClickMultiplication={handleClickMultiplication}
            PropHandleClickMinus={handleClickMinus}
            PropHandleShowResultDivision={handleClickShowResultDivision}
            PropHandleShowResultMinus={handleClickShowResultMinus}
            PropHandleShowResultMultiplication={handleClickShowResultMultiplication}
            PropHandleShowResultPluse={handleClickShowResultPluse}

          />
        </div>
      </div>




    </>
  );
}

export default App;
