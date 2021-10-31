import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./components/topbar/topbar";
//import Header from './components/header/Header';
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import ContactUs from "./pages/contactus/ContactUs";
import ManagerHome from "./pages/manager/managerHome";
import ManagerBuildingCrud from "./pages/manager/ManagerBuildingCrud";
import ManagerApartmentCrud from "./pages/manager/ManagerApartmentCrud";
import ManagerGardenCrud from "./pages/manager/ManagerGardenCrud";
import ManagerPoolCrud from "./pages/manager/ManagerPoolCrud";
import ManagerPlantCrud from "./pages/manager/ManagerPlantCrud";
import ManagerVisitorCrud from "./pages/manager/ManagerVisitorCrud";
import AdminHome from "./pages/admin/adminHome";
import AdminBuildingCrud from "./pages/admin/admin_building_crud";
import AdminGardenCrud from "./pages/admin/admin_garden";
import AdminApartmentCrud from "./pages/admin/admin_owner_crud";
import AdminVisitorCrud from "./pages/admin/admin_visitor";

import ResidentRequestService from './pages/resident/resident_request_service';
import ResidentServiceDetails from './pages/resident/resident_service_details';
import ResidentInquiry from './pages/resident/resident_inquiry';



import {
  saveItemToStorage,
  getItemFromStorage,
  removeItemFromStorage,
} from "./services/sessionStorage";
import ManagerIncidentCrud from "./pages/manager/ManagerIncidentCrud";

import ResidentHome from "./pages/resident/residentHome";
import Services from "./pages/services/Services";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(getItemFromStorage("user"))
  );

  const handleLogout = () => {
    removeItemFromStorage("user");
    setIsLoggedIn(false);
  };

  const handleLogin = (email) => {
    saveItemToStorage("user", email);
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <TopBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Home/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contactus">
          <ContactUs />
        </Route>
        <Route exact path="/manager_home">
          <ManagerHome />
        </Route>
        <Route exact path="/manager_building_crud">
          <ManagerBuildingCrud />
        </Route>
        <Route exact path="/manager_owner_crud">
          <ManagerApartmentCrud />
        </Route>
        <Route exact path="/manager_garden">
          <ManagerGardenCrud />
        </Route>
        ManagerApartmentCrud
        <Route exact path="/manager_pool">
          <ManagerPoolCrud />
        </Route>
        <Route exact path="/manager_plant">
          <ManagerPlantCrud />
        </Route>
        <Route exact path="/manager_visitor">
          <ManagerVisitorCrud />
        </Route>
        <Route exact path="/manager_incident">
          <ManagerIncidentCrud />
        </Route>
        <Route exact path="/admin_home">
          <AdminHome />
        </Route>
        <Route exact path="/admin_building_crud">
          <AdminBuildingCrud />
        </Route>
        <Route exact path="/admin_garden_crud">
          <AdminGardenCrud />
        </Route>
        <Route exact path="/admin_owner_crud">
          <AdminApartmentCrud />
        </Route>
        <Route exact path="/admin_visitor_crud">
          <AdminVisitorCrud/>
        </Route>
        <Route exact path="/resident_home">
          <ResidentHome/>
        </Route>
        
        <Route exact path="/resident_request_service">
          <ResidentRequestService />
        </Route>
        <Route exact path="/resident_service_details">
          <ResidentServiceDetails />
        </Route>
        <Route exact path="/resident_inquiry">
          <ResidentInquiry />
        </Route>
        <Route exact path="/services">
          <Services/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
