import { Directus } from "@directus/sdk";
import { create } from "apisauce";

export const directus = new Directus(process.env.NEXT_PUBLIC_API_URL, {
  auth: {
    mode: "json",
  },
});
export const mapClient = create({
  baseURL: "https://maps.googleapis.com/maps/api/place",
});

export const handleError = (errorObj) => {
  //   console.log(errorObj);
  let { errors } = errorObj;

  if (errors.length > 0) {
    let message = errors[0].message;

    return message;
  } else {
    return "error connecting to server, try again";
  }
};
