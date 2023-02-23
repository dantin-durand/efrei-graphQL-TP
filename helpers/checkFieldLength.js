const checkFieldLength = (fieldName, value, length, customError) => {
    if (!value.length > length) {
        if (customError) {
            throw new Error(customError);
        } else {
            throw new Error(`Le champ ${fieldName} doit contenir au moins ${length} caractères`);
        }
    }
}

export default checkFieldLength;