import axios from "axios";

const ORDER_BASE_REST_API_URL="http://localhost:8002/order/list";
const DETAILS_BASE_REST_API_URL="http://localhost:8002/order/pivot/";


class orderService{
    
    getAllOrders(){
        return axios.get(ORDER_BASE_REST_API_URL);
    }

    getDetails(id){
        return axios.get(DETAILS_BASE_REST_API_URL + id);
    }
}

export default new orderService();