import { Reference } from "./types";
import firestoreTimeStampToDate from "./util/firestoreTimeStampToDate";

// Records should be added here to be indexed / made searchable
const MasterData: Array<Reference> = [
  {
    collection: "areas",
    index: "bri_corpu_areas",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "buildings",
    index: "bri_corpu_buildings",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "building_types",
    index: "bri_corpu_building_types",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "caterings",
    index: "bri_corpu_caterings",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "checkpoints",
    index: "bri_corpu_checkpoints",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "compressors",
    index: "bri_corpu_compressors",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "educations",
    index: "bri_corpu_educations",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "floors",
    index: "bri_corpu_floors",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "hotels",
    index: "bri_corpu_hotels",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "items",
    index: "bri_corpu_items",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "jenis_barangs",
    index: "bri_corpu_jenis_barangs",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "jenis_pcs",
    index: "bri_corpu_jenis_pcs",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "locations",
    index: "bri_corpu_locations",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "medicine_types",
    index: "bri_corpu_medicine_types",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "partners",
    index: "bri_corpu_partners",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "providers",
    index: "bri_corpu_providers",
    transform: (data, parent) => firestoreTimeStampToDate(data),
    mappings: {
      contact: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  {
    collection: "pumps",
    index: "bri_corpu_pumps",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pump_units",
    index: "bri_corpu_pump_units",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "roles",
    index: "bri_corpu_roles",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "room_types",
    index: "bri_corpu_room_types",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ruangans",
    index: "bri_corpu_rooms",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ukers",
    index: "bri_corpu_ukers",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "users",
    index: "bri_corpu_users",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "vehicles",
    index: "bri_corpu_vehicles",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "water-meters",
    index: "bri_corpu_water-meters",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
];

const references: Array<Reference> = [
  ...MasterData,
  {
    collection: "fa_payments",
    index: "bri_corpu_fa_payments",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_activities/courier/ga_couriers",
    index: "bri_corpu_ga_couriers",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
];

export default references;
