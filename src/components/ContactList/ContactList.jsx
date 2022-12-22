import PropTypes from "prop-types";
import { ContactItem } from "components/ContactList/ContactItem";

export const ContactList = ({contacts}) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    name={name}
                    number={number}
                />
            ))}
        </ul>
    );
};

ContactList.propType = {
    contacts: PropTypes.arrayOf(PropTypes.string.isRequired),
};