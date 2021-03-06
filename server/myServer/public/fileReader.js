var uploader = document.getElementById("uploader");
var uploaderCover = document.getElementById("uploaderCover");
var reader = new FileReader();

reader.onload = function(e) {
  var contents = e.target.result;
  var data = d3.csv.parse(contents);
  logTheData(data);

  // remove button, since re-initializing doesn't work for now
  uploader.parentNode.removeChild(uploader);
  uploaderCover.parentNode.removeChild(uploaderCover);
};

uploader.addEventListener("change", handleFiles, false);

function handleFiles() {
  var file = this.files[0];
  reader.readAsText(file);
}