import PropTypes from "prop-types";

export const ContactItem = ({ name, number }) => { 
    return (
        <li>
            {name} {number}
        </li>
    )
}

ContactItem.propType = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};