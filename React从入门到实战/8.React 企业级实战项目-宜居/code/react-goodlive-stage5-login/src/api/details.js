/**
 * 详情接口
 */

import base from "./base"
import { getData } from "../utils/http"

const details = {
    detailsData(id){
        return getData(base.details+"?id="+id);
    }
}

export default details;