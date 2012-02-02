# alf-pdfjs

### Description:

This is a very simple demonstration of using [pdf.js](https://github.com/mozilla/pdf.js) to render previews of Alfresco-managed content.

### Features / Problems:

  * Converts a document to PDF via a webscript.
  * A sample HTML page invokes pdf.js against a given document.

### Synopsis:

This sample relies on a [WebScript](http://wiki.alfresco.com/wiki/Web_Scripts) that converts a given document into a PDF, this PDF is then retrieved via pdf.js.

This version of the app requires an proxy to deal with cross-domain requests and therefore includes a simple Node.js preview server.

To launch the server type the following from the projects' `client` directory:
    `$ node preview-server.json`

Once the preview server is running, you can access the app by pointing your browser to [http://localhost:3000]

The app is hard-coded with a specific server URL and document UUID, you'll need to edit `client/js/app.js`

### Requirements:
This project requires the following dependencies:

  * [Node.js](http://nodejs.com)
  * [NPM](http://npmjs.org)

### Install:

  * Install *Node.js* using [Homebrew](https://github.com/mxcl/homebrew) or some other tool.
  * Install *npm* using the instructions at [http://npmjs.org]
  * Enter the projects' `client` directory and install additional npm dependencies:
        `$ npm install -df`
