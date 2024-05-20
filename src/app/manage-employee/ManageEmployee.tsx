"use client";
import { ManageEmployeeItem } from "@/constant";
import { FaSearch } from "react-icons/fa";

function ManageEmployee() {
  // TODO: table items change
  // TODO: table searchbar sone issue
  return (
    <section className="">
      <h1 className="text-3xl font-bold py-8">Manage Employee</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {ManageEmployeeItem.map((e) => (
          <div
            key={e.id}
            className="flex gap-4 items-center bg-white p-5 rounded-lg border"
          >
            <p className="text-3xl bg-[#f5dad9] p-3 rounded-md text-[#EE5953]">
              {e.icon}
            </p>
            <div className="flex flex-col gap-1">
              <h5 className="text-gray-400">{e.title}</h5>
              <p className="text-lg font-bold">{e.count}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-5 sm:flex hidden gap-3">
        <input
          className="border px-4 py-3 rounded-lg"
          type="text"
          placeholder="Search employee"
        />
        <button className="text-xl bg-[#f5dad9] px-3 py-2 rounded-md text-[#EE5953]">
          <FaSearch />
        </button>
      </div>
      <div className="my-5 overflow-x-auto">
        <table className="lg:w-full  w-[700px]">
          <thead>
            <tr className="grid grid-cols-3 text-left bg-gray-200 px-2 py-4 rounded-lg">
              <th className="flex gap-3">
                <input type="checkbox" name="" id="" />
                <p className="">Name</p>
              </th>
              <th>Job title</th>
              <th>Deparment</th>
            </tr>
          </thead>
          <tbody className="mt-5 ">
            {[...Array(10)].map((e, i) => (
              <tr className="grid grid-cols-3 px-2 border-b py-3" key={i}>
                <td className="flex gap-4 items-center">
                  <input className="w-5 block" type="checkbox" name="" id="" />
                  <p className="w-10 h-10 bg-slate-500 rounded-full"></p>
                  <p className="">Rayan Harris</p>
                </td>
                <td>Finance Manager</td>
                <td>Finance</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ManageEmployee;
