let listPacientes = []; 
let tblPacientes = document.getElementById("tblPacientes");
let indicePacienteEditar = null;

export function savePacient() {
  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let fechaNacimiento = document.getElementById("fechaNacimiento").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let correoElectronico = document.getElementById("email").value;
  let motivoConsulta = document.getElementById("motivoConsulta").value;
  let antecedentes = document.getElementById("antecedentes").value;
  let genero = document.getElementById("genero").value;
  let estadoCivil = document.getElementById("estadoCivil").value;

  let paciente = {
    nombre,
    apellidos,
    fechaNacimiento,
    telefono,
    direccion,
    correoElectronico,
    motivoConsulta,
    antecedentes,
    genero,
    estadoCivil
  };

  if (indicePacienteEditar === null) {
    listPacientes.push(paciente);
  } else {
    listPacientes[indicePacienteEditar] = paciente;
    indicePacienteEditar = null;
    document.getElementById("btnGuardar").innerText = "Registrar Paciente";
  }
  
  loadTablePacientes();
  resetForm();
}

function loadTablePacientes() {
  let bodyTable = "";
  listPacientes.forEach(function(paciente, index) {
    let registro = `<tr>
                      <td>${paciente.nombre} ${paciente.apellidos}</td>
                      <td>${paciente.fechaNacimiento}</td>
                      <td>${paciente.telefono}</td>
                      <td>${paciente.genero}</td> 
                      <td><button class="btn btn-warning btn-modificar" data-index="${index}">Modificar</button></td>
                    </tr>`;
    bodyTable += registro;
  });
  tblPacientes.innerHTML = bodyTable;

  document.querySelectorAll(".btn-modificar").forEach(button => {
    button.addEventListener("click", function() {
      const index = this.getAttribute("data-index");
      modificarPaciente(index);
    });
  });
}


function modificarPaciente(index) {
  let paciente = listPacientes[index];
  document.getElementById("nombre").value = paciente.nombre;
  document.getElementById("apellidos").value = paciente.apellidos;
  document.getElementById("fechaNacimiento").value = paciente.fechaNacimiento;
  document.getElementById("telefono").value = paciente.telefono;
  document.getElementById("direccion").value = paciente.direccion;
  document.getElementById("email").value = paciente.correoElectronico;
  document.getElementById("motivoConsulta").value = paciente.motivoConsulta;
  document.getElementById("antecedentes").value = paciente.antecedentes;
  document.getElementById("genero").value = paciente.genero;
  document.getElementById("estadoCivil").value = paciente.estadoCivil;
  
  indicePacienteEditar = index;
  document.getElementById("btnGuardar").innerText = "Actualizar Paciente"; 
}

function resetForm() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellidos").value = "";
  document.getElementById("fechaNacimiento").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("email").value = "";
  document.getElementById("motivoConsulta").value = "";
  document.getElementById("antecedentes").value = "";
  document.getElementById("genero").value = "";
  document.getElementById("estadoCivil").value = "";
}
