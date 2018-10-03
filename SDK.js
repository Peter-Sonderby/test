

//The way to encode in js to ondrive. and to bulid the string
var root = "https://api.onedrive.com/v1.0/drive/root:";
var path = "/Documents/My Files/#nine.docx";
var url = root + escape(path);