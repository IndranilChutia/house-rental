import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import cardData from '../../static/cardData.json'
import { VerticalCard } from '@components';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const FeaturedSection = ({
    location
}) => {

    const { data: cardData, error, isLoading } = useSWR(`${import.meta.env.VITE_HOST}/api/rental-app/propertyInfos`, fetcher)

    console.log(cardData?.data)

    if(isLoading){
        return <div>Loading....</div>
      }
    
      if(error){
        return <div>{error}</div>
      }

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12'>
            {cardData?.data?.slice(0,4).map((item) => {
                return <VerticalCard key={item.id} {...item} />
            })}

        </div>
    );
};

FeaturedSection.propTypes = {
    location: PropTypes.string
};

export { FeaturedSection };