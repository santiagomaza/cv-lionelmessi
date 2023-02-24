const agregarInfoExpArgentina = () => {
  const infoAgregar = document.getElementById('info-a-agregarClub').value;
  const pagRef = document.getElementById('pag-refClub').value;
  const datoImportante = document.getElementById('dato-impClub').value;
  const infoCompl = document.getElementById('infoComplementariaClub').value;
  
  if(infoAgregar == "" || infoCompl == "") {
    return false
  }
  
  fetch('http://localhost:3000/argentina', {
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
  const resultados = await fetch('http://localhost:3000/argentina');
  const listaExp = await resultados.json();
  return listaExp;
}


const listaExpArgentina = async () => {
  const lista = await obtenerListaExpArgentina();
  const listaExpPsg = document.getElementById('listaExpPsg');
 
  const clubExpPsg = lista.map((experienciaPsg) => `  
    <li>${experienciaPsg.infoAgregar}<a href="${experienciaPsg.pagRef}" target="_blank" class="ref fw-bold"> ${experienciaPsg.infoCompl} </a><strong> ${experienciaPsg.datoImportante} </strong></li>
    `
  );

  listaExpPsg.innerHTML = clubExpPsg.join("");
}

listaExpPsg()