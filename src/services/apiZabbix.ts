import axios from "axios";

const apiZabbix = axios.create({
    baseURL: "URL do Zabbix"
});

export default apiZabbix;