import fs from "fs";

const sendResponse = async (message, data) => {
    const success = true;
    const message = message || "The API request was successful!";
    const data = data || [];
    return {
        success,
        message,
        data
    }
}

export default sendResponse;