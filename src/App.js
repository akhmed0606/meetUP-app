import { Route, Routes } from "react-router-dom";
import AllMeetsPage from "./pages/AllMeet";
import NewMeetPage from "./pages/NewMeet";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route  path="/" element={<AllMeetsPage />}>
        </Route>
        <Route path="/new-meet" element={ <NewMeetPage />}>
        </Route>
        <Route path="/favorites" element={<Favorites />}> 
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
