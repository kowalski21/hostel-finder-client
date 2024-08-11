import { mapClient } from "@/lib";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  // console.log(req.query);

  const { place_id } = req.query;
  if (!place_id) {
    return res.status(400).json({ message: `Supply Google Place ID to initiate the request` });
  }
  const apiKey = "AIzaSyD6ilQofYAo5VKDnxfgISF9_siw_NbfNaM";

  // const res = await mapClient.get(`/details/json?key=${apiKey}&place_id=${place_id}`);
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyD6ilQofYAo5VKDnxfgISF9_siw_NbfNaM&place_id=${place_id}`
    );
    const data = await response.json();
    if (data?.result) {
      return res.json({ result: data.result });
    } else {
      let msg = data?.error_message;
      return res.status(400).json({ message: msg });
    }
  } catch (error) {
    return res.status(400).json({ message: `Error connecting to Google Maps Api server` });
    // throw new Error(error.error_message);
  }
}
