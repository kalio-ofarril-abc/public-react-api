import React from "react";

class EditContact extends React.Component {

    constructor(props){
        super(props);
        const {id, name, email} = props.location.state.contact;
        this.state = {
            id,
            name,
            email
        };
    }

    update = (event) => {
        event.preventDefault();
        if(this.state.name.replace(/\s+/g,"") === "" || this.state.email.replace(/\s+/g,"") === ""){
            alert("Please fill all the input fields.");
            return;
        }
        this.props.updateContactHandler(this.state);
        this.setState({name:"",email:""});
        this.props.history.push("/");
    }

    render() {
        return(
            <div className="ui main">
                <h2>Edit Contact</h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value = {this.state.name}
                            onChange={ (event) => this.setState({name: event.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email"
                            value = {this.state.email}
                            onChange={ (event) => this.setState({email: event.target.value})}/>
                    </div>
                    <button className="ui button blue">Update</button>
                </form>
            </div>
        );
    }
}

export default EditContact