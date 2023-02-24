const agregarInfoExpPsg = () => {
  const infoAgregar = document.getElementById('info-a-agregarClub').value;
  const pagRef = document.getElementById('pag-refClub').value;
  const datoImportante = document.getElementById('dato-impClub').value;
  const infoCompl = document.getElementById('infoComplementariaClub').value;
  
  if(infoAgregar == "" || infoCompl == "") {
    return false
  }
  
  fetch('http://localhost:3000/psg', {
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

const obtenerListaExpPsg = async() => {
  const resultados = await fetch('http://localhost:3000/psg');
  const listaExp = await resultados.json();
  return listaExp;
}


const listaExpPsg = async () => {
  const lista = await obtenerListaExpPsg();
  const listaExpPsg = document.getElementById('listaExpPsg');
 
  const clubExpPsg = lista.map((experienciaPsg) => `  
    <li>${experienciaPsg.infoAgregar}<a href="${experienciaPsg.pagRef}" target="_blank" class="ref fw-bold"> ${experienciaPsg.infoCompl} </a><strong> ${experienciaPsg.datoImportante} </strong></li>
    `
  );

  listaExpPsg.innerHTML = clubExpPsg.join("");
}

listaExpPsg()