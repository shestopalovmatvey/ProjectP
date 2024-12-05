export const useTelegramWebApp = () => {
  const tg = window.Telegram.WebApp;

  return { ...tg };
};
