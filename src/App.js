import { Route, Switch } from "react-router-dom";
import AllMeetsPage from "./pages/AllMeet";
import NewMeetPage from "./pages/NewMeet";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <AllMeetsPage />
        </Route>
        <Route path="/new-meet">
          <NewMeetPage />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
