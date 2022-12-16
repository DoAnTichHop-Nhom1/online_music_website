import React from "react";
import { NavLink } from "react-router-dom";
import DashboardAlbum from "./DashboardAlbum";
import DashboardArtist from "./DashboardArtist";
import Header from "./Header";
import DashboardNewSong from "./DashboardNewSong";
import DashboardUsers from "./DashboardUsers";
import DashboardSong from "./DashboardSong";
import { IoHome } from "react-icons/io5";
import { Route, Routes } from "react-router-dom";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import DashboardHome from "./DashboardHome";

const Dashboard = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Header />

      <div className="w-[60%] my-2 p-4 flex items-center justify-evenly">
        {/* prettier-ignore */}
        <NavLink to={"/dashboard/home"}><IoHome className="text-2xl text-textColor" /></NavLink>
        {/* prettier-ignore */}
        <NavLink to={"/dashboard/user"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles }> Users </NavLink>

        {/* prettier-ignore */}
        <NavLink to={"/dashboard/songs"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles }> Songs </NavLink>

        {/* prettier-ignore */}
        <NavLink to={"/dashboard/artist"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles }> Artist </NavLink>

        {/* prettier-ignore */}
        <NavLink to={"/dashboard/albums"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles }> Albums </NavLink>
      </div>

      <div className="my-4 w-full p-4">
        <Routes>
          <Route path="/home" element={<DashboardHome />} />
          <Route path="/user" element={<DashboardUsers />} />
          <Route path="/songs" element={<DashboardSong />} />
          <Route path="/artist" element={<DashboardArtist />} />
          <Route path="/albums" element={<DashboardAlbum />} />
          <Route path="/newSong" element={<DashboardNewSong />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
