import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded", full: "rounded-full" };
const variants = {
    fill: {
        primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]",
        gray: "bg-[var(--gray)] text-black",
    },
    outline: {
        primary: "border-2 border-[var(--primary)] text-[var(--primary)]",
        gray: "border-2 border-[var(--gray)] text-[var(--gray)]",
    }
};
const sizes = {
    xs: "p-2",
    sm: "px-5 py-2",
    md: "px-8 py-3",
    lg: "px-10 py-6",
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape = "round",
    size = "md",
    variant = "fill",
    color = "primary",
    ...restProps
}) => {
    return (
        <button
            className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""} hover:shadow-lg transition-all duration-300 ease-in-out`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round", "full"]),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    variant: PropTypes.oneOf(["fill", "outline"]),
    color: PropTypes.oneOf(['primary', 'gray'])

}

export { Button };