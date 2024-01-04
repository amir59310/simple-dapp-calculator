import { toast } from 'react-toastify';
import "../Styles/ToastNotification.css";

export const SetNum1Toast = async (promiseFunction) => {
    toast.promise(
        new Promise(async (resolve, reject) => {
            try {
                await promiseFunction();
                resolve();
            } catch (error) {
                reject(error);
            }
        }),
        {
            pending: "Setting Value...",
            success: "Setting Success!",
            error: "Oh! Error...",

        },
        {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            className: " custom-toast text-xs ", 
            
            
        }

    );
};


export const SetNum2Toast = async (promiseFunction) => {
    toast.promise(
        new Promise(async (resolve, reject) => {
            try {
                await promiseFunction();
                resolve();
            } catch (error) {
                reject(error);
            }
        }),
        {
            pending: "Setting Value...",
            success: "Setting Success!",
            error: "Oh! Error...",

        },
        {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            className: " custom-toast text-xs ", 
            
            
        }

    );
};
