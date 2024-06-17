import { Linking } from "react-native";

const checkValidUrl = async (url: string) => await Linking.canOpenURL(url);

const getFormattedDate = (date: Date, includeTime: Boolean = true): String => {
  if (!date) return "";

  let options = { day: "numeric", month: "numeric", year: "numeric" };
  debugger;
  if (includeTime) {
    options = {
      ...options,
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
  }

  return date.toLocaleString("es-AR", options);
};

const isEmpty = (obj: any) => !obj || Object.keys(obj).length === 0;

const isLoaded = (obj: any) =>
  !isEmpty(obj) && Object.values(obj).every((v) => v || v === 0);

const makeId = (length = 5): String => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export { checkValidUrl, getFormattedDate, isEmpty, isLoaded, makeId };
