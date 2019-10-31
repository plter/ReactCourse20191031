/**
 * 评论接口
 */

import base from "./base"
import { getData } from "../utils/http"

const comment = {
    commentData(id){
        return getData(base.comment+"?id="+id);
    }
}

export default comment;