const agregarInfoExpBarc = () => {
  const infoAgregar = document.getElementById('info-a-agregarClub').value;
  const pagRef = document.getElementById('pag-refClub').value;
  const datoImportante = document.getElementById('dato-impClub').value;
  const infoCompl = document.getElementById('infoComplementariaClub').value;
  
  if(infoAgregar == "") {
    return false
  }
  
  fetch('http://localhost:3000/barcelona', {
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

const obtenerListaExpBarc = async() => {
  const resultados = await fetch('http://localhost:3000/barcelona');
  const listaExp = await resultados.json();
  return listaExp;
}


const listaExpBarc = async () => {
  const lista = await obtenerListaExpBarc();
  const listaExpBarc = document.getElementById('listaExpBarc');
 
  const clubExpBarc = lista.map((experienciaBarc) => `  
    <li class="listaExp">${experienciaBarc.infoAgregar}<a href="${experienciaBarc.pagRef}" target="_blank" class="ref fw-bold"> ${experienciaBarc.infoCompl} </a><strong> ${experienciaBarc.datoImportante} </strong></li>
    `
  );

  listaExpBarc.innerHTML = clubExpBarc.join("");
}

listaExpBarc()