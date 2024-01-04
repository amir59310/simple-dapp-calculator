import { toast } from 'react-toastify';
import { SetNum1Toast, SetNum2Toast, HandleDivisionToast, HandleMinusToast, HandlePluseToast, HandleMultipToast } from './ToastNotificationComplex';
import 'react-toastify/dist/ReactToastify.css';



export const handleSetNum1 = async (contract, num1) => {
    try {
        await SetNum1Toast(async () => {
            const SetNum1 = await contract.setNum1(num1);
            await SetNum1.wait();
            console.log('getNum1 Success');
        });
    } catch (error) {
        console.error("Error setting value:", error);
        toast.error("Error!");
    }
};

export const handleSetNum2 = async (contract, num2) => {

    try {
        await SetNum2Toast(async () => {
            const SetNum2 = await contract.setNum2(num2)
            await SetNum2.wait();
            console.log('getNum2 Success');
        });


    } catch (error) {
        console.error("Error setting value:", error);
        toast.error("Error!");
    }
}


export const handleDevision = async (contract) => {
    try {
        await HandleDivisionToast(async () => {

            const division = await contract.Division()
            await division.wait();
            console.log('divisioned !')
        })
    } catch (error) {
        console.error('Error in division', error)
        toast.error("Error!");

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
        await HandleMinusToast(async () => {
            const Mins = await contract.Minus();
            await Mins.wait();
            console.log('Minused !')
        })

    } catch (error) {
        console.error('Error in Minus', error)
        toast.error("Error!");

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
        await HandlePluseToast(async () => {
            
            const Pluse = await contract.Pluse();
            await Pluse.wait();
            console.log('Plused !')
        })
    } catch (error) {
        console.error('Error in Plus', error)
        toast.error('Error!');

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
        await HandleMultipToast(async()=>{

            const Mutiplication = await contract.multiplication();
            await Mutiplication.wait();
            console.log('Multiplication !')
        })
    } catch (error) {
        console.error('Mulutiplicated error :', error);
        toast.error('Error!');
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


