/**
 * 搜索接口
 */

import base from "./base"
import { getData } from "../utils/http"

const search = {
    searchData(city,content,page){
        return getData(base.search+"?city="+city+"&content="+content+"&page="+page);
    }
}

export default search;