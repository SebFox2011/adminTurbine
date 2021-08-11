// in src/App.js
import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from './Users'
import MyLoginPage from "./MyLoginPage";
import MyLogoutButton from "./MyLogoutButton";
//import authProvider from "./authProvider";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const authProvider = {
  // authentication
  login: (params) => Promise.resolve(),
  checkError: (error) => Promise.resolve(),
  checkAuth: (params) => Promise.resolve(),
  logout: () => Promise.resolve(),
  getIdentity: () => Promise.resolve(),
  // authorization
  getPermissions: (params) => Promise.resolve(),
};
const App = () => (
  <Admin
    authProvider={authProvider}
    loginPage={MyLoginPage}
    logoutButton={MyLogoutButton}
    dataProvider={dataProvider}
  >
    <Resource name="Users" list={UserList} />
  </Admin>
);

export default App;
