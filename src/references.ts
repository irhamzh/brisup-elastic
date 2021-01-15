import { Reference } from "./types";
import firestoreTimeStampToDate from "./util/firestoreTimeStampToDate";

// Records should be added here to be indexed / made searchable
const MasterData: Array<Reference> = [
  {
    collection: "users",
    index: "bri_corpu_users",
    transform: (data, parent) => firestoreTimeStampToDate(data),
    // include: [
    //   "name",
    //   "email",
    //   "role",
    //   "division",
    //   "profilePicture",
    //   "createdAt",
    //   "updatedAt",
    // ],
  },
  {
    collection: "roles",
    index: "bri_corpu_roles",
    transform: (data, parent) => firestoreTimeStampToDate(data),
    // include: [
    //   "name",
    //   "fixedAsset",
    //   "procurement",
    //   "generalAffair",
    //   "financialAdmin",
    //   "masterData",
    //   "createdAt",
    //   "updatedAt",
    // ],
  },
  {
    collection: "ruangans",
    index: "bri_corpu_rooms",
    transform: (data, parent) => firestoreTimeStampToDate(data),
    // include: ["name", "createdAt", "updatedAt"],
  },
];

const references: Array<Reference> = [
  ...MasterData,
  {
    collection: "areas",
    index: "bri_corpu_areas",
    transform: (data, parent) => firestoreTimeStampToDate(data),
    // include: ["name", "updatedAt", "createdAt"],
  },
];

export default references;
