// - This file defines the routes for the application.
// - There's a default route that points to the `Home` component.
// - A dynamic route is set up for individual songs using the `:songTitle` parameter. This route renders the `SongInfo` component.

import { Route } from "react-router-dom";
import Home from "../pages/Home";
// Import your SongInfo page component below
import SongInfo from "../pages/SongInfo";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    {/* Define your dynamic route here below */}
    <Route path="/song/:songTitle" element={<SongInfo />}></Route>
  </>
);

export default routes;
