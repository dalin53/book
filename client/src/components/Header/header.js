import React, { Component } from "react"; 
import FontAweseom from 'react-fontawesome';
import { Link }  from 'react-router-dom';

//component
import Nav from './Side_Nav/side_nav';

class Header extends Component {
    state = { 
        showNav: false
    }
    onHideNav = () => {
        this.setState({
            showNav: false
        })
    }

    render() {
    return (
        <header>
            <div className="open_nav">
                <FontAweseom name="bars" 
                    onClick={() => this.setState({showNav: true})}
                    style={{
                        color: '#ffffff',  
                        padding:'10px', 
                        cursor:'pointer'}}
                />
            </div>
            <Nav showNav={this.state.showNav} onHideNav={() => this.onHideNav()}/>
            <Link to='/' className="logo"> The Book Shelf</Link>           
        </header>
    );
  }
}

export default Header;