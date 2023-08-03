document.getElementById('boton-plus').addEventListener("click", function(){
    call_modal();
});

function call_modal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}
  
function ocultarModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
  
var btnCerrarModal = document.getElementById("btnCerrarModal");
btnCerrarModal.addEventListener("click", ocultarModal);
  
var modal = document.getElementById("myModal");
window.addEventListener("click", function(event) {
if (event.target == modal) {
    ocultarModal();
}
});
  



// primera = 'Holaaaa';
// console.log('Primera');


// function call_modal() {
//     alert("HELP");
//     console.log('Estoy dentro de la función')
// }