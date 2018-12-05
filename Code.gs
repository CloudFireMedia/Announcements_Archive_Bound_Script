var SCRIPT_NAME = 'Announcements_Archive_Bound_Script'
var SCRIPT_VERSION = 'v0.dev_ajr'

function onOpen(){
  DocumentApp.getUi().createMenu('CloudFire')
    .addItem('Format', 'formatFont_archive')
    .addToUi();
}

function formatFont_archive() {Announcements.formatFont_archive()}