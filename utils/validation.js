import { ERRORMESSAGE } from "./constant";

export const validateName = (name) => {
    if (!name) {
      return ERRORMESSAGE.NAME_IS_REQUIRED;
    } else if (name.length < 3) {
      return ERRORMESSAGE.WRITE_MORE_THAN_THREE_CHARACTERS;
    } else {
      return "";
    }
  };

export const validateMobile = (mobile) => {
    const mobileRegex = /^[6789][0-9]{9}$/;
    let errormsg = "";
    if (!mobileRegex.test(mobile)) {
      errormsg = ERRORMESSAGE.INVALID_MOBILE;
    }
    return errormsg;
  };

  export const validatePhone = (phoneNumber) => {
    const mobileRegex = /^[6789][0-9]{9}$/;
    let errormsg = "";
    if (!mobileRegex.test(phoneNumber)) {
      errormsg = ERRORMESSAGE.INVALID_PHONE;
    }
    return errormsg;
  };

  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    let errormsg = "";
    if (!emailRegex.test(email)) {
      errormsg = ERRORMESSAGE.INVALID_EMAIL;
    }
    return errormsg;
  };

  export const validateAboutYou = (aboutYou) => {
    const aboutYouRegex = /^.{20,}$/;
    let errormsg = "";
    if (!aboutYouRegex.test(aboutYou)) {
      errormsg = ERRORMESSAGE.ENTER_MORE_THAN_20_CHARACTERS;
    }
    return errormsg;
  }


  export const validateIsCorporateOrCollage = (isCorporateOrCollage) => {
    if (!isCorporateOrCollage) {
      return ERRORMESSAGE.SELECT_IS_UNIVERSITY_OR_COLLAGE_NAME;
    }
  };
  
  export const validateDepartmentType = (departmentType) => {
    if (!departmentType) {
      return ERRORMESSAGE.UNIVERSITY_OR_COLLAGE_TYPE_IS_REQUIRED;
    } else {
      return "";
    }
  };

  export const validateWebSite = (webUrl) => {
    const urlRegex =
      /^(https?:\/\/)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z]{2,6}([/a-zA-Z0-9-]*)*$/;
  
    const lowerCaseUrl = webUrl.toLowerCase();
    let isValidPrefix =
      lowerCaseUrl.startsWith('http://') ||
      lowerCaseUrl.startsWith('https://') ||
      lowerCaseUrl.startsWith('https://www.') ||
      lowerCaseUrl.startsWith('http://www.') ||
      lowerCaseUrl.startsWith('www.');;
  
    let www = webUrl.substring(0, 4);
    let http = webUrl.substring(0, 7);
    let https = webUrl.substring(0, 8);
    let httpswww = webUrl.substring(0, 12);
    let httswww = webUrl.substring(0, 11);
  
    if (
      www === 'www.' &&
      (webUrl.split('.').length - 1) >= 2
    ) {
      isValidPrefix = true;
    }
  
    if (
      http === 'http://' ||
      https === 'https://' ||
      httpswww === 'https://www.' ||
      httswww === 'http://www.'
    ) {
  
      // console.log("https",https);
  
      isValidPrefix = true;
      // console.log("isValidPrefix",isValidPrefix);
    }
  
    let errormsg = "";
  
    if (!urlRegex.test(lowerCaseUrl) || !isValidPrefix) {
      // console.log("webUrl",urlRegex.test(webUrl));
      errormsg = ERRORMESSAGE.INVALID_WEBURL;
    }
  
    return errormsg;
  };
 
  export const validateTpoName = (tpoName) => {
    if (!tpoName) {
      return MESSAGE.TPO_NAME_IS_REQUIRED;
    } else if (tpoName.length < 3) {
      return ERRORMESSAGE.WRITE_MORE_THAN_THREE_CHARACTERS;
    } else {
      return "";
    }
  };