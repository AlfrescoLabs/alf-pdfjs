/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

//
// See README for overview
//

'use strict';

PDFJS.getPdf('/_proxy/http://admin:admin@x.local:8080/alfresco/service/ext/pdf/286617b4-46eb-4bc3-a657-7392ac017824', function getPdfExample(data) {
  //
  // Instantiate PDFDoc with PDF data
  //
  var pdf = new PDFJS.PDFDoc(data);
  var page = pdf.getPage(1);
  var scale = 1.5;

  //
  // Prepare canvas using PDF page dimensions
  //
  var canvas = document.getElementById('the-canvas');
  var context = canvas.getContext('2d');
  canvas.height = page.height * scale;
  canvas.width = page.width * scale;

  //
  // Render PDF page into canvas context
  //
  page.startRendering(context);
});

