/**
 * 购物车评价接口
 */

import base from "./base"
import { postData } from "../utils/http"

const orderComment = {
    orderCommentData(info){
        return postData(base.ordercomment,info);
    }
}

export default orderComment;