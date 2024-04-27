import { ColorModeContext,useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { AuthProvider } from './context/Auth';
import PrivateRoute from './common/guards/PrivateRoute';
import './App.css';
import Calendar from './pages/Calendar/Calendar'
import Contacts from './pages/Contact/Contact'
import Team from './pages/Team/Team'
import Form from './pages/Form/Form'
import Post from './pages/Posts/Post'
import FAQ from './pages/Faq/Faq';
import Workspace from './pages/Workspace/Workspace'



function App() {
  const [theme, colorMode] = useMode ();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <AuthProvider>
    
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute  path="/form" component={Form} />
          <PrivateRoute  path="/Calendar" component={Calendar} />
          <PrivateRoute  path="/Contacts" component={Contacts} />
          <PrivateRoute  path="/Team" component={Team} />
          <PrivateRoute  path="/Post" component={Post} />
          <PrivateRoute  path="/FAQ" component={FAQ} />
          <PrivateRoute  path="/Workspace" component={Workspace} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route exact path="*" component={Home} />
        </Switch>
      </Router>
     
    </AuthProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
