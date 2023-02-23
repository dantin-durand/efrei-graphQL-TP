const formatStringToDate = (date) => {
    const formatedDate = new Date(date);

    if (formatedDate.toString() === "Invalid Date") {
        throw new Error(`${date} n'est pas une date valide`);
    }

    return formatedDate;
}

export default formatStringToDate;