import axios from "axios";

const ORDER_BASE_REST_API_URL="http://localhost:8001/product/list";

class productService{
    
    getAllOrders(){
        return axios.get(ORDER_BASE_REST_API_URL);
    }
}

export default new productService();