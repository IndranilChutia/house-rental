import { atom } from "recoil";


export const partnerState = atom({
    key: 'partnerState',
    default: {
        partnerToken:"",
        partnerId: ""
    },
});