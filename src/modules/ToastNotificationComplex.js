import { toast } from 'react-toastify';
import "../Styles/ToastNotificationComplex.css";

//This Componnet For Show Toast Notification


// This component is used to display toast notifications.
// The toast.promise function takes a Promise that will be resolved or rejected based on the asynchronous operation.
// The promiseFunction is expected to be an asynchronous operation like an API call or any other operation that returns a promise.
// If the operation is successful, the promise resolves and a success toast is shown.
// If the operation fails, the promise rejects and an error toast is shown.

//This Function Show Toast Notification from type(Promise) for SetNum1 

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
            className: " custom-toast text-xs  ",


        }

    );
};

//This Function Show Toast Notification from type(Promise) for SetNum2
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

//This Function Show Toast Notification from type(Promise) for Devision
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
//This Function Show Toast Notification from type(Promise) for Minus
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

//This Function Show Toast Notification from type(Promise) for Pluse
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

//This Function Show Toast Notification from type(Promise) for Multiplication
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