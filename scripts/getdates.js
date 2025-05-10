//current year
const date = new Date();
const year = date.getFullYear();
document.getElementById('currentYear').innerHTML = year;

//last Modifications
const lastModified = document.lastModified;
document.getElementById('lastModified').innerHTML='Last Modified: ' + lastModified;