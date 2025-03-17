import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";
import { TbSmartHome } from "react-icons/tb";
import { TbCalendarMonth } from "react-icons/tb";
import { MdOutlineAddBox } from "react-icons/md";
import { MdOutlinePeopleOutline } from "react-icons/md";


const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const {dToken}=useContext(DoctorContext)
  return (
    <div className="min-h-screen bg-white border-r border-gray-300 ">
      {aToken && (
        <ul className="text-[#515151] mt-5">
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? " bg-[#f2f3ff] border-r-4 border-primary" : ""}`} to={"/admin-dashboard"}>        
              <TbSmartHome  className="md:text-[32px] text-[30px]"  />
              <p className="hidden md:block">Dashboard</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? " bg-[#f2f3ff] border-r-4 border-primary" : ""}`} to={"/all-appointments"}>
              <TbCalendarMonth  className="md:text-[32px] text-[30px]" />
              <p className="hidden md:block">Appoinments</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? " bg-[#f2f3ff] border-r-4 border-primary" : ""}`} to={"/add-doctor"}>             
              <MdOutlineAddBox  className="md:text-[32px] text-[30px]" />
              <p className="hidden md:block">Add Doctor</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? " bg-[#f2f3ff] border-r-4 border-primary" : ""}`} to={"/doctor-list"}>
              <MdOutlinePeopleOutline  className="md:text-[32px] text-[30px]" />
              <p className="hidden md:block">Doctors List</p>
            </NavLink>
        </ul>
      )}

{dToken && (
        <ul className="text-[#515151] mt-5">
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? " bg-[#f2f3ff] border-r-4 border-primary" : ""}`} to={"/doctor-dashboard"}>
            <TbSmartHome  className="md:text-[32px] text-[30px]"  />
              <p className="hidden md:block">Dashboard</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? " bg-[#f2f3ff] border-r-4 border-primary" : ""}`} to={"/doctor-appointments"}>
              <TbCalendarMonth  className="md:text-[32px] text-[30px]" />
              <p className="hidden md:block">Appoinments</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? " bg-[#f2f3ff] border-r-4 border-primary" : ""}`} to={"/doctor-profile"}>
              <MdOutlinePeopleOutline  className="md:text-[32px] text-[30px]" />
              <p className="hidden md:block">Profile</p>
            </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
