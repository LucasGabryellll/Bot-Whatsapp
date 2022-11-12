import axios from "axios";

const apiZabbix = axios.create({
    baseURL: "http://sede.vidatel.com.br/zabbix/api_jsonrpc.php"
});

export default apiZabbix;