import { combineReducers } from "@reduxjs/toolkit";
import MaincategoryReducer from "./MaincategoryReducer";
import SubcategoryReducer from "./SubcategoryReducer";
import BrandReducer from "./BrandReducer";
import FaqReducer from "./FaqReducer";
import FeaturesReducer from "./FeaturesReducer";
import ProductReducer from "./ProductReducer";
import SettingReducer from "./SettingReducer";

export default combineReducers({
  MaincategoryStateData: MaincategoryReducer,
  SubcategoryStateData: SubcategoryReducer,
  FaqStateData: FaqReducer,
  ProductStateData: ProductReducer,
  SettingStateData: SettingReducer,
  FeatureStateData: FeaturesReducer,
  BrandStateData: BrandReducer,
});