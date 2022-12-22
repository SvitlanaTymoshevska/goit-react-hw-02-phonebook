import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export class ContactForm extends Component {
    static propTypes = {
        gettingData: PropTypes.func.isRequired,
    };
    
    state = {
        name: "",
        number: "",
    }

    onChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({[name]: value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {name, number} = this.state;
        const data = {};
        
        data.id = nanoid();
        data.name = name;
        data.number = number;
        this.props.gettingData(data);

        this.setState({name: "", number: ""});
    };

    render() {
        const {name, number} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name} 
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.onChange}
                    />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.onChange}
                    />
                </label>
                <button 
                    type="submit">
                    Add contact
                </button>
            </form>
        );
    };
};