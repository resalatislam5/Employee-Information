const shortid = require("shortid");
import { BsEmojiSmile } from "react-icons/bs";
import { FaVectorSquare } from "react-icons/fa";
import { IoCogSharp, IoPeople } from "react-icons/io5";
import { MdEmojiPeople } from "react-icons/md";
export const sideHeaderInfo = [
  {
    id: shortid.generate(),
    icon: <IoCogSharp />,
    name: "Dashboard",
    to: "/",
  },
  {
    id: shortid.generate(),
    icon: <IoPeople />,
    name: "Employee",
    to: "/",
    links: [
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Manage Employee",
        to: "/manage-employee",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Departent",
        to: "/departent",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Directory",
        to: "/directory",
      },
    ],
  },
  {
    id: shortid.generate(),
    icon: <IoPeople />,
    name: "Attendance",
    to: "/attendance",
    links: [
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Attendance-1",
        to: "/",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Attendance-2",
        to: "/",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Attendance-3",
        to: "/",
      },
    ],
  },
  {
    id: shortid.generate(),
    icon: <IoPeople />,
    name: "Time off",
    to: "/time-off",
    links: [
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Time off-1",
        to: "/",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Time off-2",
        to: "/",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Time off-3",
        to: "/",
      },
    ],
  },
  {
    id: shortid.generate(),
    icon: <IoPeople />,
    name: "Payroll",
    to: "/payroll",
    links: [
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Payroll-1",
        to: "/",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Payroll-2",
        to: "/",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Payroll-3",
        to: "/",
      },
    ],
  },
  {
    id: shortid.generate(),
    icon: <IoPeople />,
    name: "Goals",
    to: "/goals",
    links: [
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Goals-1",
        to: "/",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Goals-2",
        to: "/",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Goals-3",
        to: "/",
      },
    ],
  },
];

export const ManageEmployeeItem = [
  {
    id: shortid.generate(),
    icon: <IoPeople />,
    title: "Total Empioee",
    count: 192,
  },
  {
    id: shortid.generate(),
    icon: <MdEmojiPeople />,
    title: "Active Employe",
    count: 181,
  },
  {
    id: shortid.generate(),
    icon: <BsEmojiSmile />,
    title: "On Leave",
    count: 17,
  },
  {
    id: shortid.generate(),
    icon: <FaVectorSquare />,
    title: "Onboarding",
    count: 27,
  },
];
