//react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//[pages]
import Header from "app/components/Header";
import NotFoundPage from "app/pages/NotFound";
import DashBoard from "app/pages/Dashboard";
import LoginPage from "app/pages/Login";
import DetailPage from "app/pages/Detail";
import Add from "app/pages/Add";
import Update from "app/pages/Edit";

//styled-components
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global-style";
import theme from "styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <DashBoard />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/devices/:id">
            <Update />
          </Route>
          <Route exact path="/not-found">
            <NotFoundPage />
          </Route>
          <Route exact path="/device/:id">
            <DetailPage />
          </Route>
        </Switch>
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
};

export default App;
