const agregarInfo = () => {
  const infoAgregar = document.getElementById('info-a-agregar').value;
  const pagRef = document.getElementById('pag-ref').value;
  const datoImportante = document.getElementById('dato-imp').value;
  const infoCompl = document.getElementById('infoComplementaria').value;
  
  if(infoAgregar == "") {
    return false
  }

  fetch('http://localhost:3000/experiencias/', {
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

console.log(agregarInfo())

const obtenerListaExp = async() => {
  const resultados = await fetch('http://localhost:3000/experiencias/');
  const listaExp = await resultados.json();
  return listaExp;
}


const listaExp = async () => {
  const lista = await obtenerListaExp();
  const listaExpBarc = document.getElementById('listaExpBarc');
  
  
  const experiencias = lista.map((experiencia) => `  
    <li>${experiencia.infoAgregar}<a href="${experiencia.pagRef}" target="_blank" class="ref fw-bold"> ${experiencia.infoCompl} </a><strong> ${experiencia.datoImportante} </strong></li>
    `
  );

  listaExpBarc.innerHTML = experiencias.join("");
}

listaExp()
