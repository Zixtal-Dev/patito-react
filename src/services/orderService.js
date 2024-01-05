import axios from "axios";

const ORDER_BASE_REST_API_URL="http://localhost:8002/order/list";
const DETAILS_BASE_REST_API_URL="http://localhost:8002/order/pivot/";
const TOTAL_BASE_REST_API_URL="http://localhost:8002/order/total/";
const MAXID_BASE_REST_API_URL="http://localhost:8002/order/maxid";
const ADD_PIVOT_TABLE_URL="http://localhost:8002/pivote/create/";
const DELETE_PIVOT_URL="http://localhost:8002/order/pivot/delete/"
const ADD_ORDER_URL="http://localhost:8002/order/create";
const FIND_ORDER_BY_ID_URL="http://localhost:8002/order/show/";
const UPDATE_ORDER_BY_ID_URL="http://localhost:8002/order/update/";
const CHECK_MINUTES_URL="http://localhost:8002/date/"


class orderService{
    
    getAllOrders(){
        return axios.get(ORDER_BASE_REST_API_URL);
    }

    getDetails(id){
        return axios.get(DETAILS_BASE_REST_API_URL + id);
    }

    getTotal(id){
        return axios.get(TOTAL_BASE_REST_API_URL+id);
    }

    getFindOrder(id){
        return axios.get(FIND_ORDER_BY_ID_URL+id);
    }
    
    getMaxId(){
        return axios.get(MAXID_BASE_REST_API_URL);
    }

    createPivot(pivot,orderid,productid){
        return axios.post(ADD_PIVOT_TABLE_URL+orderid+"/"+productid,pivot);
    }

    deletPivot(orderid){
        return axios.delete(DELETE_PIVOT_URL+orderid);
    }

    createOrder(order){
        return axios.post(ADD_ORDER_URL,order);
    }

    DeleteEnabled(orderid){
        return axios.get(CHECK_MINUTES_URL+orderid);
    }

    updateOrderByID(orderid,order){
        return axios.put(UPDATE_ORDER_BY_ID_URL+orderid,order);
    }
}

export default new orderService();