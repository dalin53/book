import React, { PureComponent } from "react"; 
import {connect} from 'react-redux';
import {getUser, registerUser } from '../../actions'

class Register extends PureComponent {
    state ={
        name:'',
        lastname:'',
        email:'',
        password:'',
        error:''        
    }
    componentWillMount(){
        this.props.dispatch(getUser())
    }

    handleInputName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleInputLastName = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }
    handleInputEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleInputPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    showUser = (user) => {
       return user.users? 
        user.users.map((item) => {
          return  <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
            </tr>
        }): 
        null;
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user.register === false){
            this.setState({error: 'Something went wrong, try again!'})
        } else{
            this.setState({
                name:'',
                lastname:'',
                email:'',
                password:'',
            })
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({error:''})
        this.props.dispatch(registerUser({
            email: this.state.email,
            password: this.state.password,
            name:this.state.name,
            lastName:this.state.lastname
        },this.props.user.users))
    }

    render() {
        console.log(this.props)
        let user = this.props.user;
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>Add User</h2>
                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={this.state.name}
                            onChange={this.handleInputName}
                        />
                    </div>
                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            value={this.state.lastname}
                            onChange={this.handleInputLastName}
                        />
                    </div>
                    <div className="form_element">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                        />
                    </div>
                    <div className="form_element">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                        />
                    </div>
                    <button type="submit">Add User</button>
                    <div className="error">
                        {this.state.error}
                    </div>
                </form>
            <div className="current_users">
                <h4>Current Users:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.showUser(user)}
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Register);