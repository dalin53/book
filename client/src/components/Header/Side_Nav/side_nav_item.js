import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux'

const SideNavItem = ({user}) => {

    const items = [
        { type: 'navItem', icon: 'home', text: 'Home', link: '/', restricted: false },
        { type: 'navItem', icon: 'file-text-o', text: 'My Profile', link: '/user', restricted: true },
        { type: 'navItem', icon: 'file-text-o', text: 'Add Admin', link: '/user/register', restricted: true },
        { type: 'navItem', icon: 'file-text-o', text: 'Login', link: '/login', restricted: false, exclude: true },
        { type: 'navItem', icon: 'file-text-o', text: 'My Review', link: '/user/user-reviews', restricted: true },
        { type: 'navItem', icon: 'file-text-o', text: 'Add Review', link: '/user/add', restricted: true },
        { type: 'navItem', icon: 'file-text-o', text: 'Logout', link: '/user/logout', restricted: true }
    ]

    const showElement = (item, i) => {
          return (
              <div key={i} className={item.type}>
                  <Link to={item.link}>
                      <FontAwesome name={item.icon}/>
                      {item.text}
                  </Link>
              </div>
          )
    }

    const showItem = () => {
        return user.login ?
            items.map((item, i) => {
                if (user.login.isAuth) {
                    return !item.exclude?
                        showElement(item, i) 
                    : null;
                } else {
                    return !item.restricted?
                        showElement(item, i) 
                    : null
                }

            }) : null
    }

    return (
        <div>
            {showItem()}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(SideNavItem);