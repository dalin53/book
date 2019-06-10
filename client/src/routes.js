import React from 'react';
import { Switch, Route } from 'react-router-dom';
//component
import Layout from './hoc/layout';
import Home from './components/Home/home';
import BookView from './components/Books/';
import Login from './containers/Admin/login'
import Logout from './components/Admin/logout'
import Auth from './hoc/auth';
import User from './components/Admin/';
import AddReview from './components/Admin/add'
import UserPosts from './components/Admin/userPosts'
import EditPost from './components/Admin/editPosts';
import Register from './components/Admin/register'
const Routes = () => {
     return (
          <Layout>
               <Switch>
                    <Route path='/' exact component={Auth(Home, null)} />
                    <Route path='/books/:id' exact component={Auth(BookView)} />
                    <Route path='/login' exact component={Auth(Login, false)} />
                    <Route path='/user/logout' exact component={Auth(Logout, true)} />
                    <Route path='/user' exact component={Auth(User, true)} />
                    <Route path='/user/add' exact component={Auth(AddReview, true)} />
                    <Route path='/user/user-reviews' exact component={Auth(UserPosts, null)} />
                    <Route path='/user/edit-post/:id' exact component={Auth(EditPost, true)} />
                    <Route path='/user/register' exact component={Auth(Register, true)} />
               </Switch>
          </Layout>
     )
};

export default Routes;