import { Reference } from "./types";

// Records should be added here to be indexed / made searchable
const references: Array<Reference> = [
  {
    collection: "areas",
    index: "bri_corpu_areas",
    include: ["name", "updatedAt", "createdAt"],
  },
];

export default references;
