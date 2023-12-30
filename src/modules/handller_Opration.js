
export const handleSetNum1 = async (contract, num1) => {
    try {
        const SetNum1 = await contract.setNum1(num1);
        await SetNum1.wait();

        console.log('getNum1 Success');
    } catch (error) {
        console.error("Error setting value:", error);
    }
};

export const handleShowSetNum1 = async (contract, setResult) => {
    try {
        const resultNum1 = await contract.num1();
        setResult(resultNum1.toString());
        console.log("Value retrieved successfully:", resultNum1.toString());
    } catch (error) {
        console.error("Error getting value:", error);
    }
};
export const handleSetNum2 = async (contract, num2) => {

    try {

        const SetNum2 = await contract.setNum2(num2)
        await SetNum2.wait();
        console.log('getNum2 Success');

    } catch (error) {
        console.error("Error setting value:", error);
    }
}

export const handleShowSetNum2 = async (contract, setResult) => {

    try {
        const resultNum2 = await contract.num2()
        setResult(resultNum2.toString());
        console.log("Value retrieved successfully:", resultNum2.toString());
    } catch (error) {
        console.error("Error getting value:", error);
    }
}
export const handleDevision = async (contract) => {
    try {
        const division = await contract.Division()
        console.log('divisioned !')
    } catch (error) {
        console.error('Error in division', error)

    }
}
export const handleResultDivision = async (contract, setResult) => {
    try {
        const resultDivision = await contract.resultDivision()
        setResult(resultDivision.toString())
        console.log(`resultDivision: ${resultDivision.toString()}`)
    } catch (error) {
        console.error('Error in division', error)

    }
}

export const handleMinus = async (contract) => {
    try {
        const Mins = await contract.Minus();
        await Mins.wait();
        console.log('Minused !')
    } catch (error) {
        console.error('Error in Minus', error)

    }
}

export const handleResultMinus = async (contract, setResult) => {
    try {
        const ResultMinus = await contract.resultMinus();
        setResult(ResultMinus.toString())
        console.log(`Minused ${ResultMinus.toString()}`)
    } catch (error) {
        console.error('Error in Minus', error)

    }
}

export const handlePlus = async (contract) => {
    try {
        const Pluse = await contract.Pluse();
        await Pluse.wait();
        console.log('Plused !')
    } catch (error) {
        console.error('Error in Plus', error)

    }
}

export const handleResultPluse = async (contract, setResult) => {
    try {
        const ReslutPluse = await contract.resultPlus();
        setResult(ReslutPluse.toString())
        console.log(`Plused ${ReslutPluse.toString()}`)
    } catch (error) {
        console.error('Error in Plus', error)

    }
}

export const handleMultiplication = async (contract) => {
    try {
        const Mutiplication = await contract.multiplication();
        Mutiplication.wait();
        console.log('Multiplication !')

    } catch (error) {
        console.error('Mulutiplicated error :', error);
    }
}

export const handleResultMultiplication = async (contract, setResult) => {
    try {
        const ResultMultipllication = await contract.resultZarb();
        setResult(ResultMultipllication.toString());
        console.log(`Multiplicated ! ${ResultMultipllication.toString()}`)
    } catch (error) {

        console.error('error in Multiplicatid ', error)

    }
}


