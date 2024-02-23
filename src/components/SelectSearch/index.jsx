import React from 'react';
import { PropTypes } from 'prop-types';
import Select from 'react-select'

const customStyles = {
    // Example styles for the dropdown container
    control: (provided, state) => ({
        ...provided,
        backgroundColor: 'none',
        padding: '6px 0',
        height: '100%',
        width: '100%',
        border: 'none',
        borderRadius: '0px',
        boxShadow: state.isFocused ? 'none' : 'none',
        '&:hover': {
            border: 'none',
        },
    }),

    // Example styles for the options in the dropdown
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#007bff' : 'white',
        color: state.isSelected ? 'white' : 'black',
        '&:hover': {
            backgroundColor: state.isSelected ? '#0056b3' : '#f0f0f0',
            color: state.isSelected ? 'white' : 'black',
        },
    }),
};

const SelectSearch = ({
    id,
    setState,
    icon,
    options,
    className = "",
    ...restProps }) => {

    const handleChange = (selectedOption) => {
        if (!setState) {
            console.log(selectedOption.value)
            return;
        }
        setState((prevState) => ({
            ...prevState,
            [id]: selectedOption.value
        }));
    }

    return (
        <div className='border rounded border-gray-200 flex gap-2 px-2' >
            <div className='w-6'>
                {!!icon && icon}
            </div>
            <div className='w-full h-full'>
                <Select
                    options={options}
                    styles={customStyles}
                    className={`${className}`}
                    onChange={handleChange}
                    classNamePrefix="select"
                    {...restProps} />
            </div>
        </div>
    );
};

SelectSearch.propTypes = {
    icon: PropTypes.node.isRequired,
    options: PropTypes.array.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
    setState: PropTypes.func,
}

export { SelectSearch };