// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// // import Auth from "./auth.js";
// import auth from "./ProtectedRoute";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (auth.isAuthenticated()) {
//           return <Component {...props} />;
//         } else {
//           return (
//             <Redirect
//               to={{
//                 pathname: "/",
//                 state: {
//                   from: props.location,
//                 },
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// };

// export default ProtectedRoute;

// // import React from "react";
// // import { Route, Redirect } from "react-router-dom";

// // const ProtectedRoute = ({ isAuth: isAuth, component: Component, ...rest }) => {
// //   return (
// //     <Route
// //       {...rest}
// //       render={(props) => {
// //         if (isAuth) {
// //           return <Component />;
// //         } else {
// //           return (
// //             <Redirect to={{ pathname: "/", state: { from: props.location } }} />
// //           );
// //         }
// //       }}
// //     />
// //   );
// // };

// // export default ProtectedRoute;

// // // import React from "react";
// // // import { Route, Redirect } from "react-router-dom";
// // // import auth from "../Authentication/Authentication";
// // // const ProtectedRoute = ({ component: Component, ...rest }) => {
// // //   return (
// // //     <Route
// // //       {...rest}
// // //       render={(props) => {
// // //         if (auth.isAuthenticated()) {
// // //           return <Component {...props} />;
// // //         } else {
// // //           return (
// // //             <Redirect
// // //               to={{
// // //                 pathname: "/",
// // //                 state: {
// // //                   from: props.location,
// // //                 },
// // //               }}
// // //             />
// // //           );
// // //         }
// // //       }}
// // //     />
// // //   );
// // // };

// // // export default ProtectedRoute;
