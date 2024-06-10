function validateEmptyFields(campo) {
    return campo === '' || campo === undefined || campo === ' ' || campo === null;
}

function urlStartsWithHTTPS(url) {
    // validates if the url is a string
    if (typeof url !== 'string') {
        return false;
    }
    // validates if the url starts with "https://"
    return !url.startsWith('https://');
}

export const validations = {
    validateEmptyFields,
    urlStartsWithHTTPS
}