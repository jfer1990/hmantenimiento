let btn=document.getElementById("downloadBtn");btn.addEventListener("click",function(e){var t,n=document.getElementById("inputMail").value;n?((t=new XMLHttpRequest).open("POST","sendEmail.php"),t.setRequestHeader("content-type","application/x-www-form-urlencoded"),t.onload=function(e){200==t.status?(Swal.fire("Gracias por descargar nuestra presentación,","esperemos saber pronto de ti.","success"),console.log(e)):(console.log(e),Swal.fire({icon:"error",title:"Ups...",text:"Error"}))},t.send("email="+n)):(e.preventDefault(),Swal.fire({icon:"error",title:"Ups...",text:"Porfavor ingrese un email"}))});