
// import all the components and libraries

import Users from './Users.js'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import UserData from './UserData.js'
import 'bootstrap/dist/css/bootstrap.min.css';

// create the function App(components start with capital letter always)
// simple function with a return

function App() {
  return (

      // create all the Routes an grab them in a BrowserRouter
      // necessary to put exact path in '/' so it shows only in that route
      // then you put the component{}
      // in userdata needs to put the :id to useParams
      <BrowserRouter className="App">
        <div className= 'home'>
        <Route exact path='/' component={Users} />
        </div>
        <Route path='/userdata/:id' component={UserData} />
      </BrowserRouter>
      
    

  );
}

export default App;
