import axios from "axios";

const apiZabbix = axios.create({
    baseURL: ""
});

export default apiZabbix;