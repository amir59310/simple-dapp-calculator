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


export const HandleDivisionToast = async (promiseFunction) => {
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
            pending: "Wait For Devision",
            success: "Devision Success!",
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

export const HandleMinusToast = async (promiseFunction) => {
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
            pending: "Wait For Minus",
            success: "Minus Success!",
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


export const HandlePluseToast = async (promiseFunction) => {
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
            pending: "Wait For Pluse",
            success: "Pluse Success!",
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






export const HandleMultipToast = async (promiseFunction) => {
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
            pending: "Wait For Multip",
            success: "Multip Success!",
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