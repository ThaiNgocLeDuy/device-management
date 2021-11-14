import { toast } from "react-toastify";

toast.configure();

class ToastAlertFactory {
  error(message, option) {
    toast.error(message, option);
  }

  warn(message, option) {
    toast.warn(message, option);
  }

  info(message, option) {
    toast.info(message, option);
  }

  success(message, option) {
    toast.success(message, option);
  }
}

export const ToastAlert = new ToastAlertFactory();
