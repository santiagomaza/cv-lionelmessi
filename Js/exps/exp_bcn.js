const agregarInfoExpBarc = async (data) => {
  
  const respuesta = await fetch('https://cvmessi.onrender.com/barcelona', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const json = await respuesta.json();
  console.log(json);
}

const obtenerListaExpBarc = async() => {
  const resultados = await fetch('https://cvmessi.onrender.com/barcelona');
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