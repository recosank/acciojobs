import { SERVER_TYPE } from "./constant";
import CryptoJS from 'crypto-js';


var secretKey = process.env.encode_decode_secretKey;

export const encodeParams = (params) =>{
 console.log("encodeParams",(params));
 if(process.env.SERVER===SERVER_TYPE.PRODUCTION){
 const encryptedParams = CryptoJS.AES.encrypt(
   JSON.stringify(params),
   secretKey
 ).toString();
 return encryptedParams;
}else{
 return params;
}
}

export const decodeParams = (encryptedParams) =>{
    console.log("decodeParams",(encryptedParams));
   if(process.env.SERVER===SERVER_TYPE.PRODUCTION){
     const bytes = CryptoJS.AES.decrypt(encryptedParams, secretKey);
     const decryptedParams = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
     console.log("decodeParams response",(decryptedParams));
   return {data:decryptedParams};
 }else{
    console.log("decodeParams response",(encryptedParams));
   return {data:encryptedParams};
 }
}