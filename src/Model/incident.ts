export const priorityIncidente = (priority: number) => {
  
  if (priority == 1) {
    return "Informação";
  
  } else if (priority == 2 ) {
    return "Atenção";

  } else if (priority == 3) {
    return "Média";

  } else if (priority == 4) {
    return "Alta";

  } else if (priority == 5) {
    return "Desastre";

  }

  else {
    return "Não Classificada";
  } 
}
