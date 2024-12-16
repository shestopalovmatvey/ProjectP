import { createAsyncThunk } from "@reduxjs/toolkit";

export const initializeApp = createAsyncThunk(
  "init/initializeApp",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (_) => {
    const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
    // const initData = window.Telegram.WebApp.initData;

    const { user } = initDataUnsafe || {};

    // const loginResult = await dispatch(login(initData));
    // if (login.rejected.match(loginResult)) {
    //   return rejectWithValue("Login failed");
    // }

    // const checkResult = await dispatch(checkAccess());
    // if (checkAccess.rejected.match(checkResult)) {
    //   return rejectWithValue("Check access failed");
    // }

    window.Telegram.WebApp.expand();
    window.Telegram.WebApp.isClosingConfirmationEnabled = true;

    return {
      id: user?.id,
      username: user?.username,
      photo_url: user?.photo_url,
      first_name: user?.first_name,
      last_name: user?.last_name,
    };
  },
);
