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

const FinancialAdmin: Array<Reference> = [
  {
    collection: "fa_payments",
    index: "bri_corpu_fa_payments",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "fa_uploads",
    index: "bri_corpu_fa_uploads",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "fa_cashes",
    index: "bri_corpu_fa_cashes",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
];
const SharedCollection: Array<Reference> = [
  {
    collection: "persekots",
    index: "bri_corpu_persekots",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "working_orders",
    index: "bri_corpu_working_orders",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
];
const FixedAsset: Array<Reference> = [
  {
    collection: "fx_assets",
    index: "bri_corpu_fx_assets",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "fx_monitoring_vendors",
    index: "bri_corpu_fx_monitoring_vendors",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "fx_persediaans",
    index: "bri_corpu_fx_persediaans",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "fx_peralatan_its", //cek lagi
    index: "bri_corpu_fx_peralatan_its",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "fx_tanda_terima_barangs",
    index: "bri_corpu_fx_tanda_terima_barangs",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "fx_purchase_orders",
    index: "bri_corpu_fx_purchase_orders",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "fx_evaluasi_supliers",
    index: "bri_corpu_fx_evaluasi_supliers",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "fx_pengadaans",
    index: "bri_corpu_fx_pengadaans",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pg_working_tools",
    index: "bri_corpu_pg_working_tools",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pg_peralatan_its",
    index: "bri_corpu_pg_peralatan_its",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pg_building_sanitations/yard/pg_yard",
    index: "bri_corpu_pg_yards",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pg_building_sanitations/smart_building/pg_smart_building",
    index: "bri_corpu_pg_smart_buildings",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection:
      "pg_building_sanitations/innovation_building/pg_innovation_building",
    index: "bri_corpu_pg_innovation_buildings",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pg_building_sanitations/sarana_pendukung/pg_sarana_pendukung",
    index: "bri_corpu_pg_sarana_pendukungs",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pg_basements/water_meter/pg_water_meters",
    index: "bri_corpu_pg_water_meters",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pg_basements/electricity/pg_electricities",
    index: "bri_corpu_pg_electricities",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pg_basements/ac/pg_acs",
    index: "bri_corpu_pg_acs",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pg_basements/plumbing/pg_plumbings",
    index: "bri_corpu_pg_plumbings",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pg_basements/stp/pg_stps",
    index: "bri_corpu_pg_stps",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pg_rooms",
    index: "bri_corpu_pg_rooms",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pg_mechanical_eletricals",
    index: "bri_corpu_pg_mechanical_eletricals",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
];
const Procurement: Array<Reference> = [
  {
    collection: "pr_evaluasi_atks",
    index: "bri_corpu_pr_evaluasi_atks",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pr_klasifikasi_atks",
    index: "bri_corpu_pr_klasifikasi_atks",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pr_stock_opname_atks",
    index: "bri_corpu_pr_stock_opname_atks",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pr_evaluasi_caterings",
    index: "bri_corpu_pr_evaluasi_caterings",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pr_klasifikasi_caterings",
    index: "bri_corpu_pr_klasifikasi_caterings",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pr_evaluasi_hotels",
    index: "bri_corpu_pr_evaluasi_hotels",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pr_klasifikasi_hotels",
    index: "bri_corpu_pr_klasifikasi_hotels",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pr_pengadaan_evaluations",
    index: "bri_corpu_pr_pengadaan_evaluations",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pr_pengadaan_jasa_barangs",
    index: "bri_corpu_pr_pengadaan_jasa_barangs",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pr_pengadaan_purchase_orders",
    index: "bri_corpu_pr_pengadaan_purchase_orders",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "pr_pengadaan_tanda_terima_barangs",
    index: "bri_corpu_pr_pengadaan_tanda_terima_barangs",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
];
const GeneralAffair: Array<Reference> = [
  {
    collection: "ga_activities/courier/ga_couriers",
    index: "bri_corpu_ga_couriers",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_activities/driver/ga_drivers",
    index: "bri_corpu_ga_drivers",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_activities/security/ga_securities",
    index: "bri_corpu_ga_securities",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_activities/first_aid_kit/ga_first_aid_kits",
    index: "bri_corpu_ga_first_aid_kits",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_activities/recreation/ga_recreations",
    index: "bri_corpu_ga_recreations",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_clinic_evaluations",
    index: "bri_corpu_ga_clinic_evaluations",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_monitoring_cctvs",
    index: "bri_corpu_ga_monitoring_cctvs",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_consumption",
    index: "bri_corpu_ga_consumption",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_fuel",
    index: "bri_corpu_ga_fuel",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_driver_assignment",
    index: "bri_corpu_ga_driver_assignment",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_external_vehicles",
    index: "bri_corpu_ga_external_vehicles",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_vehicles/accessories/ga_accessories",
    index: "bri_corpu_ga_accessories",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_vehicles/kir/ga_kirs",
    index: "bri_corpu_ga_kirs",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_vehicles/service/ga_services",
    index: "bri_corpu_ga_services",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_vehicles/tax/ga_taxes",
    index: "bri_corpu_ga_taxes",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection:
      "ga_employees/performance_management/ga_performance_managements",
    index: "bri_corpu_ga_performance_managements",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_employees/pgspjs/ga_pgspjs",
    index: "bri_corpu_ga_pgspjs",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_employees/outsourcing/ga_outsourcings",
    index: "bri_corpu_ga_outsourcings",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_employees/internship/ga_internship",
    index: "bri_corpu_ga_internship",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_employees/overtime/ga_overtime",
    index: "bri_corpu_ga_overtime",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_employees/attendance/ga_attendances",
    index: "bri_corpu_ga_attendances",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
  {
    collection: "ga_employees/aps/ga_aps",
    index: "bri_corpu_ga_aps",
    transform: (data, parent) => firestoreTimeStampToDate(data),
  },
];
const references: Array<Reference> = [
  ...MasterData,
  ...SharedCollection,
  ...FixedAsset,
  ...Procurement,
  ...FinancialAdmin,
];

export default references;
