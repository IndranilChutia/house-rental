import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import cardData from '../../static/cardData.json'
import { VerticalCard } from '@components';

const FeaturedSection = ({
    location
}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(cardData)
    }, [])

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12'>
            {data.map((item) => {
                return <VerticalCard key={item.id} {...item} />
            })}

        </div>
    );
};

FeaturedSection.propTypes = {
    location: PropTypes.string
};

export { FeaturedSection };