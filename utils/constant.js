export const SERVER = process.env.SERVER;

// export const API_BASE_URL_SERVER = process.env.API_BASE_URL_SERVER;

// export const API_END_POINTS_USER = {
//     CONTACTUS:"/user/contactUs",
// };

export const ERRORMESSAGE = {
    NAME_IS_REQUIRED: "Name is required",
    WRITE_MORE_THAN_THREE_CHARACTERS:"Please enter more than three characters",
    MOBILE_NUMBER_IS_REQURED:"Mobile Number is required", 
    INVALID_MOBILE: "Please enter valid number",
    INVALID_PHONE: "Phone Number is Invalid",
    EMAIL_IS_REQURED:"Email is required",
    INVALID_EMAIL: "Please enter valid email",
    MESSAGE_IS_REQUIRED:"Message is required",
    ENTER_MORE_THAN_20_CHARACTERS:"Enter More Than 20 Characters",
    SELECT_IS_UNIVERSITY_OR_COLLAGE_NAME:"Select is university or collage",
    UNIVERSITY_OR_COLLAGE_TYPE_IS_REQUIRED:"university or collage type is required",
    CORPORATE_TYPE_IS_REQUIRED:"corporate type is required",
    WEBSITE_REQUIRED: "Website is required",
    INVALID_WEBURL: "Weburl is Invalid",
    WRITE_MORE_THAN_THREE_CHARACTERS: "Please enter more than three characters",
    DESIGNATION_IS_REQUIRED:"Designation is required",
}

export const SERVER_TYPE = {
  DEVELOPMENT:"development",
  PRODUCTION:"production",
  STAGING:"staging"
}

// export const POSTION = {
//     TOP_RIGHT: "top-right",
//     TOP_LEFT: "top-left",
//   };


export const truncateText = (str) => {
    return str.slice(0, 70);
  }
  export const truncateFiftyText = (str) => {
    return str.slice(0, 50);
  }

  export const truncateFiftyWord = (str) => {
    const words = str.split(' ');
    if (words.length > 50) {
      
      const truncatedWords = words.slice(0, 50);
      return truncatedWords.join(' ') + '...';
    } else {
      // If the array length is 50 or less, return the full string
      return words.join(' ');
    }
  }