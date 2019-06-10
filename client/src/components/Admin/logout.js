import React from 'react';
import axios from 'axios';
const Logout = (props) => {
    // let request = axios
    //   .get("/api/logout")
    //   .then(res => {
    //         setTimeout(() => {
    //             props.history.push('/')
    //         }, 2000);
    //   })
    //   .catch(err => console.error(err));
   const hadleLogOut = () => {
        axios
            .get("/api/logout")
            .then(res => {
                setTimeout(() => {
                    props.history.push('/')
                }, 2000);
            })
            .catch(err => console.error(err));
    }
    return(
        <div className="logout_container">
            {hadleLogOut()}
            <h1>Sorry to see you go :( </h1>
        </div>
    )
};
export default Logout;