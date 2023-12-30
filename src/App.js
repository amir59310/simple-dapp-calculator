import { ethers } from "ethers";
import abi from "./abi/abi.json";
import { useEffect, useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        ///@dev provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
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

  const handleSetNum1 = async () => {

    try {
      const SetNum1 = await contract.setNum1(num1);
      await SetNum1.wait()

      console.log('getNum1 Success');

    } catch (error) {
      console.error("Error setting value:", error);

    }
  }

  const handeShowSetNum1 = async () => {
    try {
      const resultNum1 = await contract.num1()
      setResult(resultNum1.toString());
      console.log("Value retrieved successfully:", resultNum1.toString());
    } catch (error) {
      console.error("Error getting value:", error);

    }
  }
  const handleSetNum2 = async () => {

    try {

      const SetNum2 = await contract.setNum2(num2)
      await SetNum2.wait();
      console.log('getNum2 Success');

    } catch (error) {
      console.error("Error setting value:", error);
    }
  }

  const hadleShowSetNum2 = async () => {

    try {
      const resultNum2 = await contract.num2()
      setResult(resultNum2.toString());
      console.log("Value retrieved successfully:", resultNum2.toString());
    } catch (error) {
      console.error("Error getting value:", error);
    }
  }
  const handleDevision = async () => {
    try {
      const division = await contract.Division()
      console.log('divisioned !')
    } catch (error) {
      console.error('Error in division', error)

    }
  }
  const handleShowResultDivision = async () => {
    try {
      const resultDivision = await contract.resultDivision()
      setResult(resultDivision.toString())
      console.log(`resultDivision: ${resultDivision.toString()}`)
    } catch (error) {
      console.error('Error in division', error)

    }
  }

  const handleMinus = async () => {
    try {
      const Mins = await contract.Minus();
      await Mins.wait();
      console.log('Minused !')
    } catch (error) {
      console.error('Error in Minus', error)

    }
  }

  const handleResultMinus = async () => {
    try {
      const ResultMinus = await contract.resultMinus();
      setResult(ResultMinus.toString())
      console.log(`Minused ${ResultMinus.toString()}`)
    } catch (error) {
      console.error('Error in Minus', error)

    }
  }

  const handlePlus = async () => {
    try {
      const Pluse = await contract.Pluse();
      await Pluse.wait();
      console.log('Plused !')
    } catch (error) {
      console.error('Error in Plus', error)

    }
  }

  const handleResultPluse = async () => {
    try {
      const ReslutPluse = await contract.resultPlus();
      setResult(ReslutPluse.toString())
      console.log(`Plused ${ReslutPluse.toString()}`)
    } catch (error) {
      console.error('Error in Plus', error)

    }
  }

  const handleMultiplication = async () => {
    try {
      const Mutiplication = await contract.multiplication();
      Mutiplication.wait();
      console.log('Multiplication !')

    } catch (error) {
      console.error('Mulutiplicated error :', error);
    }
  }

  const handleResultMultiplication = async () => {
    try {
      const ResultMultipllication = await contract.resultZarb();
      setResult(ResultMultipllication.toString());
      console.log(`Multiplicated ! ${ResultMultipllication.toString()}`)
    } catch (error) {

      console.error('error in Multiplicatid ', error)

    }
  }



  return (

    <div className="App">
      <div>
        <input value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="grtNum1"></input>
        <input value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="getNum2"></input>
        <input value={result} placeholder="showResult"></input>

        <button onClick={handleSetNum1}>getNum1</button>
        <button onClick={handleSetNum2}> getNum2</button>
        <button onClick={handlePlus}>Plus</button>
        <button onClick={handleMultiplication}>Mutiplication</button>
        <button onClick={handleDevision}>Devision</button>
        <button onClick={handleMinus}>Miuns</button>
        <button onClick={handeShowSetNum1}>ShowRESULT1</button>
        <button onClick={hadleShowSetNum2}>ShowRESULT2</button>
        <button onClick={handleShowResultDivision}>ShowResultDivision</button>
        <button onClick={handleResultMinus}>ShowResultMinus</button>.
        <button onClick={handleResultPluse}>ShowResultPluse</button>
        <button onClick={handleResultMultiplication}>ShowResultMultiplication</button>


      </div>
    </div>
  );
}

export default App;
