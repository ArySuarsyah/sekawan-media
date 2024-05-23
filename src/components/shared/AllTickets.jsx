// src/components/shared/TicketTable.jsx

import { useEffect, useState } from "react";
import fetchDataFromBackend from "../../../utils/api";
import moment from "moment";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { filterData, paginateData, sortData } from "../../../utils/filter";

const AllTicket = () => {
  const [data, setData] = useState(null);
  const [startIndex, setStartIndex] = useState(1);
  const [filterKey, setFilterKey] = useState('')
  const [showFilter, setShowFilter] = useState(false)
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    fetchDataFromBackend()
      .then((data) => {
        const filteredData = filterKey ? filterData(data, filterKey) : data;
        const sortedData = sortData(filteredData, sortBy, "asc");
        setData(paginateData(sortedData, startIndex, 10));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [startIndex, filterKey, sortBy]);

  const handleSort = (column) => {
    setSortBy(column)
  };


  // Pagination
  const paginationNext = () => {
    if (data.length - 1 === startIndex) {
      return;
    } else {
      setStartIndex(startIndex + 1);
    }
  };

  const paginationPrev = () => {
    if (startIndex > 1) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(1);
    }
  };



  console.log(data)
  return (
    <div className="bg-white text-base-200 border-1 border-slate-700 rounded-lg p-5">
      <div className="grid grid-cols-2 mb-2">
        <h2 className="text-2xl font-semibold">Title</h2>
        <div className="flex justify-end gap-5">
          <div
            className="flex items-center gap-2 cursor-pointer">
            <FaArrowUpWideShort className="text-gray-500" />

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="text-xs text-slate-300 m-1">Short</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-base-100 rounded-box w-52">
                <li
                  onClick={() => handleSort("name", "asc")}
                >
                  <a>a-z</a>
                </li>
                <li
                  onClick={() => handleSort("-name", "desc")}
                >
                  <a>z-a</a>
                </li>
              </ul>
            </div>

          </div>
          {showFilter && (
            <input type="text" placeholder="Search" className="input h-8 bg-white" onChange={(e) => setFilterKey(e.target.value)} />
          )}
          <div
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 cursor-pointer">
            <FaFilter className="text-gray-500" />
            <span
              className="text-xs text-slate-300">
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
                      value.priority > 3 && value.priority <= 6 ?
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
        <div className="join">
          <button onClick={paginationPrev} className="join-item btn">«</button>
          <button className="join-item btn">
            {startIndex}
          </button>
          <button onClick={paginationNext} className="join-item btn">»</button>
        </div>
      </div>
    </div>
  );
};

export default AllTicket;