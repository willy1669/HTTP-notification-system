'use strict';

export const urlValidator = (url) => {
    const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    if (!re.test(url)) {
        alert("url error");
        return {success: false, message: `URL validation error.`};
    }
}