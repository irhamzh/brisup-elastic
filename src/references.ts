import { Reference } from "./types";
import firestoreTimeStampToDate from "./util/firestoreTimeStampToDate";

// Records should be added here to be indexed / made searchable
const MasterData: Array<Reference> = [
  {
    collection: "users",
    index: "bri_corpu_users",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "roles",
    index: "bri_corpu_roles",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ruangans",
    index: "bri_corpu_rooms",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "areas",
    index: "bri_corpu_areas",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
];

const references: Array<Reference> = [
  // ...MasterData,
  // {
  //   collection: "fa_payments",
  //   index: "bri_corpu_fa_payments",
  //   transform: (data, parent) => firestoreTimeStampToDate(data),
  // },
  {
    collection: "ga_activities/courier/ga_couriers",
    index: "bri_corpu_ga_couriers",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
];

export default references;
