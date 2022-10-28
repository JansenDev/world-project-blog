import { ALL_DASH, ALL_WHITE_SPACES } from "./regex";

export const textSerialize = (text: string = "") => {
    return text.toLocaleLowerCase().replace(ALL_WHITE_SPACES, "-");
}
export const textUnSerialize = (text: string = "") => {
    return text.toLocaleLowerCase().replace(ALL_DASH, " ");
}

export const cleanWhiteSpacesExtra = (text: string = "") => {
    return text.replace(ALL_WHITE_SPACES, " ");
}