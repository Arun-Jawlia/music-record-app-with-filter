import { Routes, Route } from "react-router-dom";
import MusicRecords from "../pages/MusicRecords";
import SingleMusicRecord from "../pages/SingleMusicRecord";
import EditMusicRecord from "../pages/EditMusicRecord";
import Login from "../pages/Login";
import PrivateRoute from "../pages/PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MusicRecords />} />
      <Route path="/music/:id" element={<SingleMusicRecord />} />
      <Route
        path="/music/:id/edit"
        element={
          <PrivateRoute>
            <EditMusicRecord />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default AllRoutes;
