import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import SearchBooks from './pages/SearchBooks';
// import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import Card from './pages/Card';
import PostForm from './pages/PostForm';
// import Tabs from './components/Tabs'

import * as API from './utils/API';
import AuthService from './utils/auth';



// import our context object for state
import UserInfoContext from './utils/UserInfoContext';

function App() {
  // set data to be used for UserInfoContext and make it available to all other components
  const [userInfo, setUserInfo] = useState({
    items: [],
    savedBooks: [],
    username: '',
    email: '',
    bookCount: 0,
    // method to get user data after logging in
    getUserData: () => {
      // if user's logged in get the token or return null
      const token = AuthService.loggedIn() ? AuthService.getToken() : null;

      if (!token) {
        return false;
      }
      API.getMe(token)
        .then(({ data: { username, email, savedBooks, bookCount, items } }) =>
          setUserInfo({ ...userInfo, username, email, savedBooks, bookCount, items })
        )
        .catch((err) => console.log(err));
    },
  });

  // on load, get user data if a token exists
  useEffect(() => {
    userInfo.getUserData();
  },[]);

  return (
    // <div styles={{backgroundImage:'url(${RVA})'}}>
    <Router>
      <>
        {/* wrap our entire app in context provider and provide userInfo state as value */}
        <UserInfoContext.Provider value={userInfo}>
          <Navbar />
          {/* <Image src={RVA} style={{'width': '100%'}} /> */}
          
          <Switch>
            <Route exact path='/postform' component={PostForm} />
            <Route exact path='/' component={Card} />
            {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
          </Switch>
      
          
        </UserInfoContext.Provider>
      </>
    </Router>
    // </div>
  );
}

export default App;
