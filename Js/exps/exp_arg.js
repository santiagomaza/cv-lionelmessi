const agregarInfoExpArgentina = () => {
  const infoAgregar = document.getElementById('info-a-agregarClub').value;
  const pagRef = document.getElementById('pag-refClub').value;
  const datoImportante = document.getElementById('dato-impClub').value;
  const infoCompl = document.getElementById('infoComplementariaClub').value;
  
  if(infoAgregar == "") {
    return false
  }
  
  fetch('https://cvmessi.onrender.com/argentina', {
    method: 'POST',
    body: JSON.stringify({
      infoAgregar,
      pagRef,
      datoImportante,
      infoCompl,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

const obtenerListaExpArgentina = async() => {
  const resultados = await fetch('https://cvmessi.onrender.com/argentina');
  const listaExp = await resultados.json();
  return listaExp;
}


const listaExpArgentina = async () => {
  const lista = await obtenerListaExpArgentina();
  const listaExpArg = document.getElementById('listaExpArg');
 
  const clubExpArg = lista.map((experienciaArg) => `  
    <li class="listaExp">${experienciaArg.infoAgregar}<a href="${experienciaArg.pagRef}" target="_blank" class="ref fw-bold"> ${experienciaArg.infoCompl} </a><strong> ${experienciaArg.datoImportante} </strong></li>
    `
  );

  listaExpArg.innerHTML = clubExpArg.join("");
}

listaExpArgentina()