import { sendMensageTrigger } from '../Controller/MessageController';

import { getNewTrigger } from '../utils/RequestTriggers';
import { priorityIncidente } from '../Model/incident';

import TIMESTAMPNOW from '../utils/timestampNow';
import converterTimestamp from '../utils/converterTimestamp';

export async function threadNewMessage() {
  const timestampNow = TIMESTAMPNOW();

  const data = await getNewTrigger(timestampNow);
  const lengthTrigger = data['result'].length;

  if (lengthTrigger > 0) {

    data['result'].forEach(async function(value: "", index: number) {
      const timeIncidet = converterTimestamp(data['result']?.[index]?.lastchange);
      const priority = priorityIncidente(data['result']?.[index]?.priority);

      const diagnosis = `Novo incidente encontrado: ${data?.['result']?.[index]?.triggerid}`
        + '\n' + `Descrição: *${data?.['result']?.[index]?.description}*`
        + '\n' + `Horario: ${timeIncidet}`
        + '\n' + `Prioridade: ${priority}`
        + '\n' + `Comentários: ${data?.['result']?.[index]?.comments}`
        + '\n' + `Host: *${data?.['result']?.[index]?.['hosts']?.[0]?.name}*`;

      await sendMensageTrigger(diagnosis);

      console.log("Mensagem enviada ao whatsapp às: ", timeIncidet);
    });

  }
}
