// src/components/shared/TicketTable.jsx

import { useEffect, useState } from "react";
import fetchDataFromBackend from "../../../utils/api";
import moment from "moment";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";

const AllTicket = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDataFromBackend()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(data)
  return (
    <div className="bg-white text-base-200 border-1 border-slate-700 rounded-lg p-5">
      <div className="grid grid-cols-2 mb-2">
        <h2 className="text-2xl font-semibold">Title</h2>
        <div className="flex justify-end gap-5">
          <div className="flex items-center gap-2 cursor-pointer">
            <FaArrowUpWideShort className="text-gray-500" />
            <span className="text-xs text-slate-300">
              Short
            </span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaFilter className="text-gray-500" />
            <span className="text-xs text-slate-300">
              Filter
            </span>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Ticket details</th>
              <th>Customer name</th>
              <th>Date</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              data?.map((value, index) =>
                <tr
                  key={index + 1}
                  className="font-semibold"
                >
                  <td>
                    <div className="flex gap-2 items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src={value.avatar} alt={`${value.name} Image`} />
                      </div>
                      <div className="flex flex-col">
                        <div>
                          {value.ticketDetails}
                        </div>
                        <div className="text-xs text-slate-300">
                          {`Updated ${moment(value.updatedAt, "YYYYMMDD").fromNow()}`}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col">
                      <div>{value.name}</div>
                      <div className="text-xs text-slate-300">{`On ${moment(value.updatedAt).format("DD.MM.YYYY")}`}</div>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col">
                      <div>{moment(value.updatedAt).format("DD MMM, YYYY")}</div>
                      <div className="text-xs text-slate-300">{moment(value.updatedAt).format("h:mm: a")}</div>
                    </div>
                  </td>
                  <td className="text-white">
                    {
                      value.priority <= 3 &&
                      <span className="text-xs bg-yellow-300 px-5 py-2 rounded-full w-96">LOW</span>
                    }
                    {
                      value.priority > 3 && value.priority < 6 ?
                        (<span className="text-xs bg-cyan-500 px-5 py-2 rounded-full w-96">NORMAL</span>) : ''
                    }
                    {
                      value.priority > 6 &&
                      <span className="text-xs bg-red-500 px-5 py-2 rounded-full w-96">HIGHT</span>
                    }
                  </td>
                  <td>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTicket;