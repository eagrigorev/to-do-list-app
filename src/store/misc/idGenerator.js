const CHARACTERS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const generateId = (length) => {
    let randomId = "";
    const charactersLength = CHARACTERS.length;
    for (let i = 0; i < length; i++) {
        randomId += CHARACTERS.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return randomId;
};
