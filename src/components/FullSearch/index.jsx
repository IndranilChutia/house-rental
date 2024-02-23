import React from 'react';
import { SelectSearch, Button } from '@components';
import { IoMdPin } from "react-icons/io";
import { HiMiniHome } from "react-icons/hi2";
import { IoWallet } from "react-icons/io5";

import { useRecoilState } from 'recoil';
import { searchData } from 'src/store/atoms/searchData';



const locationOptions = [
    { value: 'lagos', label: 'Lagos' },
    { value: 'abuja', label: 'Abuja' },
    { value: 'kano', label: 'Kano' },
    { value: 'ibadan', label: 'Ibadan' },
    { value: 'enugu', label: 'Enugu' },
    { value: 'portharcourt', label: 'Port Harcourt' },
    { value: 'kaduna', label: 'Kaduna' },
    { value: 'uyo', label: 'Uyo' },
    { value: 'jos', label: 'Jos' },
    { value: 'calabar', label: 'Calabar' },
    { value: 'asaba', label: 'Asaba' },
    { value: 'awka', label: 'Awka' },
    { value: 'akure', label: 'Akure' },
    { value: 'yola', label: 'Yola' },
    { value: 'minna', label: 'Minna' },
    { value: 'abakaliki', label: 'Abakaliki' },
    { value: 'sokoto', label: 'Sokoto' },
    { value: 'damaturu', label: 'Damaturu' },
    { value: 'bauchi', label: 'Bauchi' },
    { value: 'gusau', label: 'Gusau' },
    { value: 'lokoja', label: 'Lokoja' },
    { value: 'maiduguri', label: 'Maiduguri' },
]
const FullSearch = () => {
    const [searchState, setSearchState] = useRecoilState(searchData);


    return (
        <div className='w-full flex justify-center'>
            <div className='w-full flex justify-between gap-4 lg:gap-8 items-end bg-white p-10 rounded-md shadow-xl'>
                <div className='flex flex-col  gap-1.5 min-w-40 w-full'>
                    <label className='text-sm font-medium'>Location</label>
                    <SelectSearch id='location' setState={setSearchState} icon={<IoMdPin className='h-full w-full' />} options={locationOptions} />
                </div>
                <div className='flex flex-col  gap-1.5 min-w-40 w-full'>
                    <label className='text-sm font-medium'>Bedroom</label>
                    <SelectSearch id='bedroom' setState={setSearchState} icon={<HiMiniHome className='h-full w-full' />} options={locationOptions} />
                </div>
                <div className='flex flex-col  gap-1.5 min-w-40 w-full'>
                    <label className='text-sm font-medium'>Rent</label>
                    <SelectSearch id='rent' setState={setSearchState} icon={<IoWallet className='h-full w-full' />} options={locationOptions} />
                </div>
                <Button size='lg' shape='round' className='' onClick={() => { console.log(searchState) }}>Search</Button>
            </div>
        </div>
    );
};

export { FullSearch };