// import React from "react";
// import { API_BASE_URL_SERVER, API_END_POINTS_USER } from "@/utils/constant";
// import axios from "axios";
// import { decodeParams, encodeParams } from "@/utils/encodedecode";

// export const contactUsApi = async (formData) => {
//     try {
//         console.log("formData",formData);
//         let reqData = {data:encodeParams(formData)};
//       const contactUSData = await axios.post(
//         `${API_BASE_URL_SERVER}${API_END_POINTS_USER.CONTACTUS}`,
//         reqData,
//       );
//       return decodeParams(contactUSData?.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };