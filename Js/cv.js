const mostrarForm = () => {
  const selecCat = document.getElementById('catCV');

  if("infPers" == selecCat.value){
    document.getElementById('inputs').innerHTML = `
   <form class="row g-3 needs-validation" novalidate>  
    <div class="col-md-12">
        <label for="exampleFormControlTextarea1" class="form-label">Información a agregar</label>
        <textarea class="form-control" id="info-a-agregar" rows="2" required></textarea>
      <div class="valid-feedback">
        Looks good!
      </div>
      <div class="invalid-feedback">Complete este campo por favor</div>
    </div>
    <div class="col-md-6">
      <label for="validationCustom01" class="form-label">Página de referencia</label>
      <input autocomplete="off" type="text" class="form-control" id="pag-ref">
    </div>
    <div class="col-md-6">
      <label for="exampleFormControlTextarea2" class="form-label">Informacion a agregar</label>
      <textarea class="form-control" autocomplete="off" id="infoComplementaria" rows="1" required></textarea>
    </div>
    <div class="col-md-12">
      <label for="validationCustom01" class="form-label">Dato a resaltar (Si es que es relevante)</label>
      <input autocomplete="off" type="text" class="form-control w-25" id="dato-imp">
    </div>
    <div class="modal-footer mt-3">
      <button type="submit" class="btn btn-success" onclick="agregarInfo()">Agregar Información</button>
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
    </div> 
   </form>
    `
  }
  else if("exp" == selecCat.value){
    document.getElementById('inputs').innerHTML = `
    <form class="row g-3 needs-validation" novalidate>
     <div class="col-md-6">
      <label for="validationCustom01" class="form-label">Club / Selección</label>
      <select class="form-select" id="expCV" onchange="expClubesOpc()" required>
        <option selected disabled value="">Elegir club / selección</option>
        <option value="Barc">F.C. Barcelona</option>
        <option value="Psg">Paris Saint-Germain</option>
        <option value="Arg">Selección Argentina</option>
      </select>
     </div>
    </form>
    <div id="inputs2" class="row g-3 d-flex"></div>
    `
  }
  else{
    document.getElementById('inputs').innerHTML = `
     <form class="row g-3 needs-validation" novalidate>
       <div class="col-md-12">
         <label for="validationCustom01" class="form-label">Ingresar la habilidad</label>
         <input autocomplete="off" type="text" class="form-control" id="ingHab" required>
         <div class="invalid-feedback">
           Complete este campo por favor
         </div>
       </div>
       <div class="modal-footer mt-3">
         <button type="submit" class="btn btn-success" onclick="agregarHab()">Agregar Habilidad</button>
         <button type="reset" class="btn btn-danger" data-bs-dismiss="modal" data-bs-target="#exampleModal" aria-label="Close">Cerrar</button>
       </div>   
     </form>
    `
  }
}

const expClubesOpc = () => {
  const expCV = document.getElementById('expCV');

  if ("Barc" == expCV.value){
    document.getElementById('inputs2').innerHTML = `
    <span class="my-3 fw-bold">Agregar experiencia al club F.C. Barcelona</span>
    <form class="row g-3 needs-validation" novalidate>
     <div class="col-md-12">
      <label for="exampleFormControlTextarea1" class="form-label">Información a agregar</label>
      <textarea class="form-control" id="info-a-agregarClub" rows="2" required></textarea>
     <div class="valid-feedback">
       Looks good!
     </div>
      <div class="invalid-feedback">Complete este campo por favor</div>
     </div>
     <div class="col-md-6">
      <label for="validationCustom01" class="form-label">Página de referencia</label>
      <input autocomplete="off" type="text" class="form-control" id="pag-refClub">
     </div>
     <div class="col-md-6">
      <label for="validateCustom01" class="form-label">Info a agregar</label>
      <textarea class="form-control" autocomplete="off" id="infoComplementariaClub" rows="1" required></textarea>
     </div>
     <div class="col-md-12">
      <label for="validationCustom01" class="form-label">Dato a resaltar (Si es que es relevante)</label>
      <input autocomplete="off" type="text" class="form-control w-25" id="dato-impClub">
     </div>
     <div class="modal-footer mt-3">
      <button type="submit" class="btn btn-success" onclick="agregarInfoExpBarc()">Agregar Experiencia</button>
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
     </div> 
    </form>
    `
  }
  else if("Psg" == expCV.value){
    document.getElementById('inputs2').innerHTML = `
    <span class="my-3 fw-bold">Agregar experiencia al club Paris Saint-Germain</span>
    <form class="row g-3 needs-validation" novalidate>
     <div class="col-md-12">
      <label for="exampleFormControlTextarea1" class="form-label">Información a agregar</label>
      <textarea class="form-control" id="info-a-agregarClub" rows="2" required></textarea>
     <div class="valid-feedback">
       Looks good!
     </div>
      <div class="invalid-feedback">Complete este campo por favor</div>
     </div>
     <div class="col-md-6">
      <label for="validationCustom01" class="form-label">Página de referencia</label>
      <input autocomplete="off" type="text" class="form-control" id="pag-refClub">
     </div>
     <div class="col-md-6">
      <label for="validateCustom01" class="form-label">Info a agregar</label>
      <textarea class="form-control" autocomplete="off" id="infoComplementariaClub" rows="1" required></textarea>
     </div>
     <div class="col-md-12">
      <label for="validationCustom01" class="form-label">Dato a resaltar (Si es que es relevante)</label>
      <input autocomplete="off" type="text" class="form-control w-25" id="dato-impClub">
     </div>
     <div class="modal-footer mt-3">
      <button type="submit" class="btn btn-success" onclick="agregarInfoExpPsg()">Agregar Experiencia</button>
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
     </div> 
    </form>
    `
  }
  else{
    document.getElementById('inputs2').innerHTML = `
    <span class="my-3 fw-bold">Agregar experiencia a Selección Argentina</span>
    <form class="row g-3 needs-validation" novalidate>
     <div class="col-md-12">
      <label for="exampleFormControlTextarea1" class="form-label">Información a agregar</label>
      <textarea class="form-control" id="info-a-agregarClub" rows="2" required></textarea>
     <div class="valid-feedback">
       Looks good!
     </div>
      <div class="invalid-feedback">Complete este campo por favor</div>
     </div>
     <div class="col-md-6">
      <label for="validationCustom01" class="form-label">Página de referencia</label>
      <input autocomplete="off" type="text" class="form-control" id="pag-refClub">
     </div>
     <div class="col-md-6">
      <label for="validateCustom01" class="form-label">Info a agregar</label>
      <textarea class="form-control" autocomplete="off" id="infoComplementariaClub" rows="1" required></textarea>
     </div>
     <div class="col-md-12">
      <label for="validationCustom01" class="form-label">Dato a resaltar (Si es que es relevante)</label>
      <input autocomplete="off" type="text" class="form-control w-25" id="dato-impClub">
     </div>
     <div class="modal-footer mt-3">
      <button type="submit" class="btn btn-success" onclick="agregarInfoExpArgentina()">Agregar Experiencia</button>
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
     </div> 
    </form>
    `
  }
}


const agregarHab = () => {
  const habilidad = document.getElementById('ingHab').value;

  if(habilidad == "") {
    return false
  }

  fetch('http://localhost:3000/habilidades', {
    method: 'POST',
    body: JSON.stringify({
      habilidad
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

const obtenerListaHab = async() => {
  const resultados = await fetch('http://localhost:3000/habilidades');
  const listaHab = await resultados.json();
  return listaHab;
}

const listaHab = async () => {
  const lista = await obtenerListaHab();
  const listaHab = document.getElementById('listaHab');
  
  
  const habilidades = lista.map((habilidad) => `  
    <li>${habilidad.habilidad}</li>
    `
  );

  listaHab.innerHTML = habilidades.join("");
}

listaHab()