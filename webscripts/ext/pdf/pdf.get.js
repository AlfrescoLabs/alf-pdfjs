var storetype = url.templateArgs['store_type'] || 'workspace';
var storeid = url.templateArgs['store_id'] || 'SpacesStore';
var id = url.templateArgs['node_id'];
var property = url.templateArgs['property'] || 'cm:content';

var nodeRef = storetype+'://'+storeid+'/'+id;

var file = search.findNode(nodeRef);

var renditionDef = renditionService.createRenditionDefinition('cm:pdfExport', 'reformat');
renditionDef.parameters['mime-type'] = "application/pdf";

var pdfFile = renditionService.render(file, renditionDef);

// add file to model and terminate.
model.contentNode = pdfFile;
