let button  = document.getElementById('btn-id');
button.addEventListener('click',exportPdf);

function exportPdf(){
  var doc = new jsPDF();

  // We'll make our own renderer to skip this editor
  var specialElementHandlers = {
    '#btn-id': function(element, renderer){
      return true;
    },
    '.controls': function(element, renderer){
      return true;
    }
  };

  // All units are in the set measurement for the document
  // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
  doc.fromHTML($('.container').get(0), 15, 15, {
    'width': 190, 
    'elementHandlers': specialElementHandlers
  });

  doc.save('Generated.pdf');
        console.log('Pdf Downloaded successfully.')
    }


