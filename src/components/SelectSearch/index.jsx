import React from 'react';
import { PropTypes } from 'prop-types';
import Select, { components } from 'react-select'

const customStyles = {
    // Example styles for the dropdown container
    control: (provided, state) => ({
        ...provided,
        backgroundColor: 'none',
        padding: '6px 0.5rem',
        height: '100%',
        width: '100%',
        border: '1px solid #e2e8f0',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        boxShadow: state.isFocused ? 'none' : 'none',
        '&:hover': {
            borderColor: 'none',
        },
    }),

    // Example styles for the options in the dropdown
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#0d1025' : 'white',
        color: state.isSelected ? 'white' : 'black',
        '&:hover': {
            backgroundColor: state.isSelected ? '#0056b3' : '#f0f0f0',
            color: state.isSelected ? 'white' : 'black',
        },
        cursor: 'pointer',
    }),

    valueContainer: (provided) => ({
        ...provided,
        flexWrap: 'nowrap',
    }),
};

const ControlWithIcon = ({ selectProps, children, ...props }) => (
    <components.Control {...props}>
        {selectProps.icon && <div className="w-5">{selectProps.icon}</div>}
        {children}
    </components.Control>
);




const SelectSearch = ({
    id,
    setState,
    isMulti,
    defaultVal,
    icon,
    options,
    className = "",
    ...restProps }) => {


    const handleChange = (selectedOption) => {
        if (!setState) {
            console.log(selectedOption)
            return;
        }

        if (!isMulti) return setState((prevState) => ({
            ...prevState,
            [id]: selectedOption
        }));

        setState((prevState) => ({
            ...prevState,
            [id]: selectedOption.map(item => item)
        }));
    }


    return (
        <div className='w-full h-full'>
            <Select
                options={options}
                isMulti={isMulti}
                styles={customStyles}
                defaultValue={defaultVal}
                icon={icon}
                components={{ Control: ControlWithIcon }}
                className={`${className}`}
                onChange={handleChange}
                classNamePrefix="select"
                {...restProps} />
        </div>
    );
};

SelectSearch.propTypes = {
    icon: PropTypes.node.isRequired,
    options: PropTypes.array.isRequired,
    isMulti: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string,
    setState: PropTypes.func,
    defaultVal: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

SelectSearch.defaultProps = {
    isMulti: false,
    className: "",
    id: "",
    setState: null
}

export { SelectSearch };