let btn = document.getElementById('downloadBtn'); 
btn.addEventListener('click',function(e){
     
    let email = document.getElementById("inputMail").value; 
    if(email){
        var ajax = new XMLHttpRequest(); 
        ajax.open('POST','sendEmail.php');
        ajax.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        ajax.onload = function(response){
            if(ajax.status == 200){
                Swal.fire(
            
                    'Gracias por descargar nuestra presentación,',
                    'esperemos saber pronto de ti.',
                    'success'
                )
                console.log(response);
            }
            else{
                console.log(response);
                Swal.fire({
                    icon: 'error',
                    title: 'Ups...',
                    text: 'Error'
                })
            }
            
        }
        ajax.send('email='+email);
    }
    else{
        e.preventDefault();
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'Porfavor ingrese un email'
        })
    }

}); 