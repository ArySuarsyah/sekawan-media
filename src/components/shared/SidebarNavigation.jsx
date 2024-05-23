import { Link } from 'react-router-dom';
import { FaChartPie, FaTicketAlt, FaLightbulb, FaPhone, FaUserTie, FaBook, FaCog, FaCreditCard } from "react-icons/fa";

const SidebarNavigation = () => {
  return (
    <div className='w-52 bg-[#3b3b3b] h-screen'>
      <div className='flex items-center m-5 gap-2'>
        <div className='w-8 h-8 bg-blue-500 rounded-full flex justify-center items-center'>
          <div className='w-[30%] h-[30%] bg-white rounded-r-full'>
          </div>
        </div>
        <h3 className='font-semibold'>Dashboard Kit</h3>
      </div>
      <ul className="list-none p-2.5 flex flex-col gap-2">
        <li className="flex items-center gap-3 hover:bg-slate-500 p-5 cursor-pointer">
          <FaChartPie />
          <Link to="/overview">Overview</Link>
        </li>
        <li className="flex items-center gap-3 hover:bg-slate-500 p-5 cursor-pointer">
          <FaTicketAlt />
          <Link to="/tickets">Tickets</Link>
        </li>
        <li className="flex items-center gap-3 hover:bg-slate-500 p-5 cursor-pointer">
          <FaLightbulb />
          <Link to="/ideas">Ideas</Link>
        </li>
        <li className="flex items-center gap-3 hover:bg-slate-500 p-5 cursor-pointer">
          <FaPhone />
          <Link to="/contact">Contact</Link>
        </li>
        <li className="flex items-center gap-3 hover:bg-slate-500 p-5 cursor-pointer">
          <FaUserTie />
          <Link to="/agents">Agents</Link>
        </li>
        <li className="flex items-center gap-3 hover:bg-slate-500 p-5 cursor-pointer">
          <FaBook />
          <Link to="/articles">Articles</Link>
        </li>
        <hr />
        <li className="flex items-center gap-3 hover:bg-slate-500 p-5 cursor-pointer">
          <FaCog />
          <Link to="/settings">Settings</Link>
        </li>
        <li className="flex items-center gap-3 hover:bg-slate-500 p-5 cursor-pointer">
          <FaCreditCard />
          <Link to="/subscription">Subscription</Link>
        </li>
      </ul>
    </div>
  );
}

export default SidebarNavigation;
