import { atom } from "recoil";


export const superAdminState = atom({
    key: 'superAdminState',
    default: {
        superAdminToken:"",
        superAdminId: ""
    },
});