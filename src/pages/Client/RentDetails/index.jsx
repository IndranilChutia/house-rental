import { useUser } from '@clerk/clerk-react';
import { Button } from '@components';
import axios from 'axios';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { IoBedOutline } from 'react-icons/io5';
import { PiArmchair, PiBathtub } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { generateImgLink } from 'src/utils/generateImgLink';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())
const RentDetails = () => {
    const { user } = useUser();
    const [ownerData, setOwnerData] = useState({})

    console.log(user.id)
    const { data, error, isLoading } = useSWR(`${import.meta.env.VITE_HOST}/api/rental-app/getUserRentedProperty?userId=${user.id}`, fetcher)

    const rentData = data?.data

    const fetchAdminData = async () => {
        const response = await axios.get(`${import.meta.env.VITE_HOST}/api/rental-app/partner?id=${rentData?.rentedPropertyDetails?.adminId}`)

        console.log("Admin Data: ", response.data.data)
        setOwnerData(response.data.data)
    }

    useEffect(() => {
        fetchAdminData()
    }, [data])


    if (isLoading) {
        return <div>Loading....</div>
    }

    if (error) {
        return <div>{error}</div>
    }


    if (rentData.statusCode && rentData.statusCode == '404') {
        return <div>
            <h1 className='font-bold text-[2rem] tracking-tight'>Rented Property</h1>
            <p className='mt-1.5 text-zinc-700'>Manage your rented properties</p>
            <hr className='mt-4' />
            <p className='mt-2 text-lg font-semibold'>You have no rented properties</p>
            <Button size='sm' className='mt-4'><Link to={'/properties'}>Browse Properties</Link></Button>
        </div>
    }

    return (
        <div>
            <h1 className='font-bold text-[2rem] tracking-tight'>Rented Property</h1>
            <p className='mt-1.5 text-zinc-700'>Manage your rented properties</p>
            <hr className='mt-4' />
            <div className='mt-4'>
                <div className='flex flex-col'>
                    <img src={generateImgLink(rentData.rentedPropertyDetails.thumbnail.path)} alt="rentedProperty" className='rounded-lg' />
                    <h1 className='mt-4 text-xl font-medium'>{rentData.rentedPropertyDetails.name}</h1>
                    <div className='mt-4 flex gap-2 md:gap-6 flex-wrap'>
                        <div className="flex items-center">
                            <IoBedOutline className="text-lg mr-3" />
                            {rentData.rentedPropertyDetails.bedroom} Bedrooms
                        </div>
                        <div className="flex items-center">
                            <PiArmchair className="text-lg mr-3" />
                            {_.capitalize(rentData.rentedPropertyDetails.furnishDetails)}
                        </div>
                    </div>
                    <hr className='mt-2' />
                    <div className='w-full h-full grid grid-cols-2 gap-4 mt-6'>
                        <h2 className=''>Rent: ₹{rentData.rentedPropertyDetails.rent}/month</h2>
                        <h2 className=''>Maintenance: ₹{rentData.rentedPropertyDetails.maintenance}/month</h2>
                        <h2 className=''>Security: ₹{rentData.rentedPropertyDetails.security}</h2>
                    </div>
                    <div className='mt-6'>
                        <h2 className='font-semibold'>Rented By: </h2>
                        <div className='mt-2 flex items-center gap-2'>
                            <div className='w-10 h-10 rounded-full bg-zinc-500 flex justify-center items-center text-white'>AD</div>
                            <p className=''>{_.capitalize(ownerData?.name)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default RentDetails;