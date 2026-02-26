import {all} from "redux-saga/effects"

import MaincategorySagas from "./MaincategorySagas"
import BrandSagas from "./BrandSagas"
import SubcategorySagas from "./SubcategorySagas"
import ProductSagas from "./ProductSagas"
import FeaturesSagas from "./FeaturesSagas"
import FaqSagas from "./FaqSagas"
import SettingSagas from "./SettingSagas"

export default function* RootSaga(){
    yield all([
        MaincategorySagas(),
        SubcategorySagas(),
        BrandSagas(),
        ProductSagas(),
        SettingSagas(),
        FaqSagas(),
        FeaturesSagas(),
    ])
}