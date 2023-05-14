// Get all the anchor elements with the class "solicitar-cotizacion"
const anchors = document.querySelectorAll('.solicitar-cotizacion');

// Get the hidden input field
const cardInterestField = document.getElementById('card-interest');

// Add a click event listener to each anchor element
anchors.forEach((anchor) => {
  anchor.addEventListener('click', function(event) {
    //event.preventDefault(); // Prevent the default anchor behavior

    // Get the value of the data-service attribute
    const service = anchor.getAttribute('data-service');

    // Set the value of the hidden field
    cardInterestField.value = service;
    
    // Optionally, submit the form here if needed
    // formElement.submit();
  });
});