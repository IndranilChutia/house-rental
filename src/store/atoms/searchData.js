import { atom } from "recoil";


export const searchData = atom({
    key: 'searchData',
    default: {
        location: '',
        bedroom: '',
        rent: ''
    },
});