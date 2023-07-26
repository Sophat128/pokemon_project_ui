import {
    toast
} from "react-hot-toast";

export const NotifySucess = (e) => {
    toast.success(e)
};


export const NotifyError = (e) => {
    toast.error(e)
};

export const NotifyInfo = (e) => {
    toast(e, {
        icon: '⚠️',
    });
};