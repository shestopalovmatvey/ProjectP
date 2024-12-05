/* eslint-disable @typescript-eslint/ban-ts-comment */
export const useTelegramWebApp = () => {
  //@ts-expect-error
  const tg = window.Telegram.WebApp;

  return { ...tg };
};
