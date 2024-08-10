import { atom } from "recoil";


export const partnerState = atom({
    key: 'filterState',
    default: {
        filters: [],
    },
});