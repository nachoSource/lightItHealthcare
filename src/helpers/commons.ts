import { Linking } from "react-native";

const checkValidUrl = async (url: string) => await Linking.canOpenURL(url);

const getFormattedDate = (date: Date, includeTime: Boolean = true): String => {
  let options = { day: "numeric", month: "numeric", year: "numeric" };
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

export { checkValidUrl, getFormattedDate };
