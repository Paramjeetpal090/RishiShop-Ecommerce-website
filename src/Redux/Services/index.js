// ================= COMMON DUMMY API =================

export const createRecord = async () => ({ data: [] });
export const getRecord = async () => ({ data: [] });
export const deleteRecord = async () => ({ data: [] });
export const updateMultipartRecord = async () => ({ data: [] });



// ================= GENERIC ACTION CREATOR =================

const createModule = (name) => {
  return {
    [`CREATE_${name}`]: `CREATE_${name}`,
    [`CREATE_${name}_RED`]: `CREATE_${name}_RED`,
    [`GET_${name}`]: `GET_${name}`,
    [`GET_${name}_RED`]: `GET_${name}_RED`,
    [`UPDATE_${name}`]: `UPDATE_${name}`,
    [`UPDATE_${name}_RED`]: `UPDATE_${name}_RED`,
    [`DELETE_${name}`]: `DELETE_${name}`,
    [`DELETE_${name}_RED`]: `DELETE_${name}_RED`,
  };
};

// ================= ALL MODULES =================

export const {
  CREATE_FAQ,
  CREATE_FAQ_RED,
  GET_FAQ,
  GET_FAQ_RED,
  UPDATE_FAQ,
  UPDATE_FAQ_RED,
  DELETE_FAQ,
  DELETE_FAQ_RED,
} = createModule("FAQ");

export const {
  CREATE_PRODUCT,
  CREATE_PRODUCT_RED,
  GET_PRODUCT,
  GET_PRODUCT_RED,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_RED,
  DELETE_PRODUCT,
  DELETE_PRODUCT_RED,
} = createModule("PRODUCT");

export const {
  CREATE_CATEGORY,
  CREATE_CATEGORY_RED,
  GET_CATEGORY,
  GET_CATEGORY_RED,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_RED,
  DELETE_CATEGORY,
  DELETE_CATEGORY_RED,
} = createModule("CATEGORY");

export const {
  CREATE_MAINCATEGORY,
  CREATE_MAINCATEGORY_RED,
  GET_MAINCATEGORY,
  GET_MAINCATEGORY_RED,
  UPDATE_MAINCATEGORY,
  UPDATE_MAINCATEGORY_RED,
  DELETE_MAINCATEGORY,
  DELETE_MAINCATEGORY_RED,
} = createModule("MAINCATEGORY");

export const {
  CREATE_SUBCATEGORY,
  CREATE_SUBCATEGORY_RED,
  GET_SUBCATEGORY,
  GET_SUBCATEGORY_RED,
  UPDATE_SUBCATEGORY,
  UPDATE_SUBCATEGORY_RED,
  DELETE_SUBCATEGORY,
  DELETE_SUBCATEGORY_RED,
} = createModule("SUBCATEGORY");

export const {
  CREATE_BRAND,
  CREATE_BRAND_RED,
  GET_BRAND,
  GET_BRAND_RED,
  UPDATE_BRAND,
  UPDATE_BRAND_RED,
  DELETE_BRAND,
  DELETE_BRAND_RED,
} = createModule("BRAND");

export const {
  CREATE_FEATURES,
  CREATE_FEATURES_RED,
  GET_FEATURES,
  GET_FEATURES_RED,
  UPDATE_FEATURES,
  UPDATE_FEATURES_RED,
  DELETE_FEATURES,
  DELETE_FEATURES_RED,
} = createModule("FEATURES");

export const {
  CREATE_SETTING,
  CREATE_SETTING_RED,
  GET_SETTING,
  GET_SETTING_RED,
  UPDATE_SETTING,
  UPDATE_SETTING_RED,
  DELETE_SETTING,
  DELETE_SETTING_RED,
} = createModule("SETTING");
