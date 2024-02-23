import { atom } from "recoil";


export const searchState = atom({
    key: 'searchState',
    default: {
        location: null,
        bedroom: [],
        rent: null
    },
});