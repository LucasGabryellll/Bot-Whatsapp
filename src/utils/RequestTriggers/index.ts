import apiZabbix from "../../services/apiZabbix";

export async function getNewTrigger(timeStamp: string) {
  const { data } = await apiZabbix.post('', {
    "jsonrpc": "2.0",
    "method": "trigger.get",
    "params": {
      "output": [
        "triggerid",
        "description",
        "status",
        "value",
        "priority",
        "lastchange",
        "comments",
        "type",
        "state"
      ],
      "lastChangeSince": timeStamp,
      "sortfield": "priority",
      "selectHosts": [
        "hostid",
        "host",
        "name"
      ],
      "sortorder": "DESC"
    },
    "auth": "",
    "id": 1
  });

  return data;
}