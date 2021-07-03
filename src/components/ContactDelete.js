import React from "react";
import {Link} from "react-router-dom";
import user from "../images/user.png";

const ContactDelete = (props) =>{

    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    };

    const {id, name, email} = props.location.state.contact;

    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="Contact"/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
                <div className="selector">
                    <Link to="/">
                        <button className="ui button blue">Back</button>
                    </Link>
                    <Link to="/">
                        <button className="ui button red" onClick={ () => deleteContactHandler(id)}>Delete</button>
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default ContactDelete;