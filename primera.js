


console.log("Primera prueba jquery")  
$(document).ready(function() {

    $('body').on('click', '#boton-plus', function(){
        console.log('hello')
        $('#myModal').dialog({
            modal:true,
            
        });
    });

    $('body').on('click', '#btnCerrarModal' ,function(){
        console.log('hola')
        $('#myModal').hide();
    })
    
    // $("#myModal").dialog({
    //     modal:true,
    //     title: "Modal",
    //     show: {
    //         effect:"fade",
    //         duration:1000,
    //     },
    //     button:[{
    //         text: "Close",
    //         close:true,
    //     }],
    //     $content: qweb.render("principal"),
    // });
});



// document.getElementById('boton-plus').addEventListener("click", function(){
//     call_modal();
// });

// function call_modal() {
//     var modal = document.getElementById("myModal");
//     modal.style.display = "block";
// }
  
// function ocultarModal() {
//     var modal = document.getElementById("myModal");
//     modal.style.display = "none";
// }
  
// var btnCerrarModal = document.getElementById("btnCerrarModal");
// btnCerrarModal.addEventListener("click", ocultarModal);
  
// var modal = document.getElementById("myModal");
// window.addEventListener("click", function(event) {
// if (event.target == modal) {
//     ocultarModal();
// }
// });


    
    // $('#myModal').dialog({
    //     show: {
    //         effect: "slide",
    //         duration: 1000,
    //     },
    //     wigth: 500,
    //     heigth: 500,
    // });

// primera = 'Holaaaa';
// console.log('Primera');


// function call_modal() {
//     alert("HELP");
//     console.log('Estoy dentro de la función')
// }