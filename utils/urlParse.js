// this function get a name of image from url
export function urlParse(str) {
    // on next line we split initial string by query parameters 
    const arrOfStrings = str.split('?');
    // on next line we split first element in array which we get on prev step by character '/'  
    const res = arrOfStrings[0].split('/');
    // if we use unsplash API name of image always be the last element of res 
    return res[res.length-1];
}