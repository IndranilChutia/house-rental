import { useState, useEffect } from 'react';
import { PiUsersLight, PiBuildingsLight, PiHouseLineLight, PiStoolLight, PiChairLight, PiArmchairLight } from 'react-icons/pi';
import Slider from 'react-slick/lib/slider';

const houseTypeOptions = [
    {
        icon: <PiHouseLineLight />,
        title: 'Independent',
    },
    {
        icon: <PiBuildingsLight />,
        title: 'Apartment',
    },
    {
        icon: <PiUsersLight />,
        title: 'Shared',
    },
];

const furnishingOptions = [
    {
        icon: <PiStoolLight />,
        title: 'Unfurnished',
    },
    {
        icon: <PiChairLight />,
        title: 'Semi-Furnished',
    },
    {
        icon: <PiArmchairLight />,
        title: 'Furnished',
    },
];

const amenityOptions = [
    {
        icon: <PiStoolLight />,
        title: 'Unfurnished',
    },
    {
        icon: <PiChairLight />,
        title: 'Semi-Furnished',
    },
    {
        icon: <PiArmchairLight />,
        title: 'Furnished',
    },
    {
        icon: <PiArmchairLight />,
        title: 'Furnished',
    },
    {
        icon: <PiArmchairLight />,
        title: 'Furnished',
    },
    {
        icon: <PiArmchairLight />,
        title: 'Furnished',
    },
    {
        icon: <PiArmchairLight />,
        title: 'Furnished',
    },
    {
        icon: <PiArmchairLight />,
        title: 'Furnished',
    },
];

const FilterHorizontal = () => {
    const [selectedFilters, setSelectedFilters] = useState({
        houseType: [],
        furnishing: [],
        amenities: [],
    });

    const [clickedButton, setClickedButton] = useState(null);

    const handleClickAnimation = (title) => {
        setClickedButton(title);

        setTimeout(() => {
            setClickedButton(null);
        }, 100);
    };

    // House Type Select Function
    const handleHouseTypeSelect = (title) => {
        // Toggle the selected state of the clicked option
        setSelectedFilters((prevSelectedFilters) => {
            const isAlreadySelected = prevSelectedFilters.houseType.includes(title);

            if (isAlreadySelected) {
                return {
                    ...prevSelectedFilters,
                    houseType: prevSelectedFilters.houseType.filter((option) => option !== title),
                };
            } else {
                return {
                    ...prevSelectedFilters,
                    houseType: [...prevSelectedFilters.houseType, title],
                };
            }
        });

        handleClickAnimation(title);
    };

    // Furnishing Select Function
    const handleFurnishingTypeSelect = (title) => {
        // Toggle the selected state of the clicked option
        setSelectedFilters((prevSelectedFilters) => {
            const isAlreadySelected = prevSelectedFilters.furnishing.includes(title);

            if (isAlreadySelected) {
                return {
                    ...prevSelectedFilters,
                    furnishing: prevSelectedFilters.furnishing.filter((option) => option !== title),
                };
            } else {
                return {
                    ...prevSelectedFilters,
                    furnishing: [...prevSelectedFilters.furnishing, title],
                };
            }
        });

        handleClickAnimation(title);
    };

    const handleAmenityTypeSelect = (title) => {
        // Toggle the selected state of the clicked option
        setSelectedFilters((prevSelectedFilters) => {
            const isAlreadySelected = prevSelectedFilters.amenities.includes(title);

            if (isAlreadySelected) {
                return {
                    ...prevSelectedFilters,
                    amenities: prevSelectedFilters.amenities.filter((option) => option !== title),
                };
            } else {
                return {
                    ...prevSelectedFilters,
                    amenities: [...prevSelectedFilters.amenities, title],
                };
            }
        });

        handleClickAnimation(title);
    };


    useEffect(() => {
        console.log(selectedFilters);
    }, [selectedFilters]);



    // React Slick Carousel
    var settings = {
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        // variableWidth: true,
    };

    return (
        <div className='w-full h-full flex items-center'>
            {/* House Type */}
            <div className='h-full w-fit flex-auto grid grid-flow-col gap-4 md:gap-6 lg:gap-8'>
                {houseTypeOptions.map((item) => (
                    <label
                        key={item.title}
                        className={`cursor-pointer flex flex-col items-center transition-all ease-in duration-100 ${clickedButton === item.title ? 'scale-[0.93]' : ''
                            }`}
                        onClick={() => handleHouseTypeSelect(item.title)}
                    >
                        <input
                            type='checkbox'
                            checked={selectedFilters.houseType.includes(item.title)}
                            onChange={() => handleHouseTypeSelect(item.title)}
                            className='hidden'
                        />
                        <span
                            className={`flex flex-col items-center transition-all ${selectedFilters.houseType.includes(item.title)
                                ? 'text-white'
                                : 'hover:text-white text-gray-500'
                                }`}>
                            <span className='text-2xl lg:text-3xl'>{item.icon}</span>
                            <h3 className={`text-[10px] lg:text-xs mt-1`}>{item.title}</h3>
                        </span>
                    </label>
                ))}
            </div>
            <hr className='border-gray-300 h-14 border-[0.1px] rounded-xl mx-6 lg:mx-10' />


            {/* Furnishing Type */}
            <div className='h-full w-fit flex-auto grid grid-flow-col gap-4 md:gap-6 lg:gap-8'>
                {furnishingOptions.map((item) => (
                    <label
                        key={item.title}
                        className={`cursor-pointer flex flex-col items-center transition-all ease-in duration-100 ${clickedButton === item.title ? 'scale-[0.93]' : ''
                            }`}
                        onClick={() => handleFurnishingTypeSelect(item.title)}
                    >
                        <input
                            type='checkbox'
                            checked={selectedFilters.furnishing.includes(item.title)}
                            onChange={() => handleFurnishingTypeSelect(item.title)}
                            className='hidden'
                        />
                        <span
                            className={`flex flex-col items-center transition-all ${selectedFilters.furnishing.includes(item.title)
                                ? 'text-white'
                                : 'hover:text-white text-gray-500'
                                }`}>
                            <span className='text-2xl lg:text-3xl'>{item.icon}</span>
                            <h3 className={`text-[10px] lg:text-xs mt-1 text-nowrap`}>{item.title}</h3>
                        </span>
                    </label>
                ))}
            </div>
            <hr className='border-gray-300 h-14 border-[0.1px] rounded-xl mx-6 lg:mx-10' />

            {/* Amenities */}
            <div className='h-full w-full flex-auto grid grid-flow-col gap-4 md:gap-6 lg:gap-8 overflow-x-scroll overflow-y-hidden horizontalAmenitiesFilter'>
                {amenityOptions.map((item) => (
                    <div
                        key={item.title}
                        className={`cursor-pointer flex flex-col items-center transition-all ease-in duration-100 ${clickedButton === item.title ? 'scale-[0.93]' : ''
                            }`}
                        onClick={() => handleAmenityTypeSelect(item.title)}
                    >
                        <input
                            type='checkbox'
                            checked={selectedFilters.amenities.includes(item.title)}
                            onChange={() => handleAmenityTypeSelect(item.title)}
                            className='hidden'
                        />
                        <span
                            className={`flex flex-col items-center transition-all ${selectedFilters.amenities.includes(item.title)
                                ? 'text-white'
                                : 'hover:text-white text-gray-500'
                                }`}>
                            <span className='text-2xl lg:text-3xl'>{item.icon}</span>
                            <h3 className={`text-[10px] lg:text-xs mt-1 text-nowrap`}>{item.title}</h3>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { FilterHorizontal };
