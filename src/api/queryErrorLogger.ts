/* eslint-disable no-console */
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { setToastMessage } from "@/redux/features/toast/toastSlice";
import { toast } from "@/shared/utils/Toast";

export const queryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (
      action.type.endsWith("/fulfilled") &&
      action.payload.message !== "success"
    ) {
      const successMessage = action.payload.message;
      if (successMessage) {
        api.dispatch(
          setToastMessage({
            toastMessage: action.payload.message,
            type: "success",
          })
        );
        toast.success(action.payload.message);
      }
    }

    return next(action);
  };
