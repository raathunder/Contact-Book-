import React from "react";
import "./styles/App.scss";
import Navbar from "./Components/Layouts/Navbar";
import Contacts from "./Components/contacts/Contacts";
import { Provider, useSelector } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./Components/contacts/AddContact";
import EditContact from "./Components/contacts/EditContact";

import FavList from "./Components/Favourite/FavList";
import Login from "./Components/Authentication/Login";

import { selectUser } from "./Components/Features/userSlice";
// import ProtectedRoute from "./Components/Route/ProtectedRoute";

function App() {
  const user = useSelector(selectUser);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Switch>
              <Route exact path="/contacts/add" component={AddContact} />
              <Route exact path="/contacts/edit/:id" component={EditContact} />
              <Route exact path="/fav" component={FavList} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Contacts} />
              <Route path="*" component={() => "404 NOT FOUND"} />

              {/* <ProtectedRoute exact path="/" component={Contacts} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

// export const UserRoute = ({ isUser, restricted, component: Comp, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       component={(props) =>
//         restricted ? (
//           isUser ? (
//             <Redirect to="/login" {...props} />
//           ) : (
//             <Comp {...props} />
//           )
//         ) : (
//           <Comp {...props} />
//         )
//       }
//     />
//   );
// };
