const shortid = require("shortid");
import { BsEmojiSmile } from "react-icons/bs";
import { FaVectorSquare } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { IoAlarmOutline, IoCogSharp, IoFileTrayFullOutline, IoPeople } from "react-icons/io5";
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
    to: "#",
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
    icon: <IoAlarmOutline />,
    name: "Attendance",
    to: "#",
    links: [
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Attendance-1",
        to: "/attendance-1",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Attendance-2",
        to: "/attendance",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Attendance-3",
        to: "/attendance-3",
      },
    ],
  },
  {
    id: shortid.generate(),
    icon: <FaCalendarDays />,
    name: "Time off",
    to: "#",
    links: [
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Time off-1",
        to: "/time-off-1",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Time off-2",
        to: "/time-off-3",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Time off-3",
        to: "/time-off-3",
      },
    ],
  },
  {
    id: shortid.generate(),
    icon: <IoFileTrayFullOutline />,
    name: "Payroll",
    to: "#",
    links: [
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Payroll-1",
        to: "/payroll-1",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Payroll-2",
        to: "/payroll-2",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Payroll-3",
        to: "/payroll-3",
      },
    ],
  },
  {
    id: shortid.generate(),
    icon: <GoGoal />,
    name: "Goals",
    to: "#",
    links: [
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Goals-1",
        to: "/goals-1",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Goals-2",
        to: "/goals-2",
      },
      {
        id: shortid.generate(),
        icon: <IoPeople />,
        name: "Goals-3",
        to: "/goals-3",
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
