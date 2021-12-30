import React from 'react';
import ReactDOM from 'react-dom';
// //layouts
// import AuthLayout from "./pages/layouts/AuthLayout"
import MainLayout from "./pages/layout/index"
// //pages
// import Dashboard from './pages/Dashboard';
// import ProcessTrade from './pages/ProcessTrade';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
// //auth pages
// import Login from './pages/auth/Login';
// import Register from './pages/auth/Register';
// import ForgotPassword from './pages/auth/ForgotPassword';

//</Router>import Edit from "./pages/Edit"
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";

function Main(){

    return (
      <Router>
        <Switch>
        <Route exact path="/"><Redirect to="/home"/></Route>
        <MainLayout exact path="/home" component={Home} />
        <MainLayout exact path="/about" component={About} />
        <MainLayout exact path="/portfolio" component={Portfolio} />
        <MainLayout exact path="/resume" component={Resume} />
        <MainLayout exact path="/contact" component={Contact} />
        {/* <Route path="/land2"  component={Form} />
        <Route exact path="/"><Redirect to="/dashboard" /></Route>
          <MainLayout exact path="/"><Redirect to="/" /></MainLayout>
          <MainLayout path="/dashboard" exact component={Dashboard} />
          <MainLayout path="/portfolio" component={Portfolio} />
          <MainLayout path="/sell_bitcoins"  component={Sell} />
          <MainLayout path="/buy_bitcoins"  component={Buy} />
          <MainLayout path="/post_trade"  component={PostTrade} />
 
          <MainLayout path="/process_trade/:id"  component={ProcessTrade} />
          <MainLayout path="/process_trade/"  component={ProcessTrade} />

          <AuthLayout path="/auth/login" component={Login} />
          <AuthLayout path="/auth/signup" component={Register} />
          <AuthLayout path="/auth/forgot_password" component={ForgotPassword} /> */}
        </Switch>
      </Router>
    );
}
export default Main;
ReactDOM.render(<Main />, document.getElementById('main-page'));