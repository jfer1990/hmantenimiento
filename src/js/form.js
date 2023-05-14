
    
    // Legacy Code
    // function sendEmail(e){
    //     console.log(e);
    //     e.preventDefault();
    //     let name = document.getElementById("name").value;
    //     let lastname = document.getElementById("lastname").value;
    //     let email = document.getElementById("email").value;
    //     let tel = document.getElementById("telephone").value;
    //     let message = document.getElementById("message").value;
    //     let location = document.getElementById("ubicacion").value; 
    //     let company = document.getElementById("nombreEmpresa").value; 


    //     if(isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(tel)){
    //         var ajax = new XMLHttpRequest(); 
    //         ajax.open('POST','sendEmail.php');
    //         ajax.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    //         ajax.onload = function(response){
    //             if(ajax.status == 200){
    //                 Swal.fire(
    //                     '¡Mensaje enviado!',
    //                     'En breve te contactaremos',
    //                     'success'
    //                 )
    //                 console.log(response);
    //             }
    //             else{
    //                 console.log(response);
    //                 Swal.fire({
    //                     icon: 'error',
    //                     title: 'Ups...',
    //                     text: 'Error'
    //                 })
    //             }
                
    //         }
    //         ajax.send('email='+email+'&name='+name+'&lastname='+lastname+'&tel='+tel+'&message='+message+'&location='+location+'&company='+company);
    //     } 
    // }

    // function sendEmailWithPills(e){
    //     console.log(e);
    //     e.preventDefault();
    //     let name = document.getElementById("nameModal").value;
    //     let lastname = document.getElementById("lastnameModal").value;
    //     let email = document.getElementById("emailModal").value;
    //     let tel = document.getElementById("telModal").value;
    //     let message = document.getElementById("messageModal").value;
    //     let company = document.getElementById("companynameModal").value; 


    //     let selctedPills = new Formulario(); 
    //     let fields = selctedPills.getValuesSelected().join(','); 
    //     message += `<br>Estoy interesado en los siguientes campos: ${fields}`; 


    //     if(isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(tel)){
    //         var ajax = new XMLHttpRequest(); 
    //         ajax.open('POST','sendEmail.php');
    //         ajax.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    //         ajax.onload = function(response){
    //             if(ajax.status == 200){
    //                 Swal.fire(
    //                     '¡Mensaje enviado!',
    //                     'En breve te contactaremos',
    //                     'success'
    //                 )
    //                 console.log(response);
    //             }
    //             else{
    //                 console.log(response);
    //                 Swal.fire({
    //                     icon: 'error',
    //                     title: 'Ups...',
    //                     text: 'Error'
    //                 })
    //             }
                
    //         }
    //         ajax.send('email='+email+'&name='+name+'&lastname='+lastname+'&tel='+tel+'&company='+company+'&message='+message);
    //     } 
    // }
    // function isNotEmpty(value){
    //     if(value == ""){
    //         return false;
    //     }
    //     else{
    //         return true;
    //     }
    // }
    // function unselectPills(buttonsContainer){
    //     for (let i = 0; i < buttonsContainer.children.length; i++) {
    //         let currentBtn = buttonsContainer.children[i].children[0];
    //         currentBtn.classList.remove("btn-selected");
               
    //     }
    // }
    
    // class Formulario{
    //     getValuesSelected(){
    //         let services = document.querySelectorAll('#servicePills li input[type="checkbox"]:checked'); 
    //         let servicesValues = []; 
    //         [].forEach.call(services, function(service) {
    //             servicesValues.push(service.value); 
    //           });
    //         return servicesValues; 
    //     }
    // }

    // let form = document.getElementById("form-submit");
    // form.addEventListener("submit",sendEmail);

    // let formModal = document.getElementById('formModal'); 
    // formModal.addEventListener('submit',sendEmailWithPills); 



// May 2023 code updated

// Get the form element
const contactForm = document.getElementById('contactForm');

// Add event listener for form submission
contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Collect form data
  const formData = new FormData(contactForm);

  // Send the form data to sendEmail.php using fetch
  fetch('sendEmail.php', {
    method: 'POST',
    body: formData,
  })
    .then(function (response) {
      // Check the response status
      if (response.ok) {
        // HTTP 200-299 status range indicates success
        showModal('Success', 'Email sent successfully');
      } else if (response.status === 400) {
        showModal('Error', 'Missing required fields');
      } else {
        showModal('Error', 'An error occurred while sending the email');
      }
    })
    .catch(function (error) {
      showModal('Error', 'An error occurred while sending the email');
    });
});

// Function to show modal with title and message
function showModal(title, message) {
    Swal.fire({
        html:
          `<div class="modal"><img style="width:100%;" src="assets/img/modal.png"><div>hello world - ${message}</div></div>`,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton:false
      })
  // Code to display the modal with the provided title and message
}
    

    