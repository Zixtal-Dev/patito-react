import axios from "axios";

const CLIENT_LIST_REST_API_URL="http://localhost:8003/client/list";
const CLIENT_ADD_API_URL="http://localhost:8003/client/create";
const NEXT_CLIENT_ID_API_URL="http://localhost:8003/client/maxid";

class clientService{
    
    getAllOrders(){
        return axios.get(CLIENT_LIST_REST_API_URL);
    }

    getMaxId(){
        return axios.get(NEXT_CLIENT_ID_API_URL);
    }

    createClient(client){
        return axios.post(CLIENT_ADD_API_URL,client);
    }
}

export default new clientService();