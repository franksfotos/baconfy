function baconfy(bfnr){
	

	var fileNameNr1 = "./img/" + bfnr[0] + ".png"
	var fileNameNr2 = "./img/" + bfnr[1] + ".png"

	var objCanvas = document.getElementById('baconfied');
	
	objCanvas.width = objCanvas.width;

	if(objCanvas.getContext){
		var context = objCanvas.getContext('2d');	
		var imageObj1 = new Image();
		var imageObj2 = new Image();

		imageObj1.onload = function() {
			context.drawImage(imageObj1,0,0,imageObj1.width*.4,imageObj1.height*.4)
		};
		imageObj1.src = fileNameNr1;

		imageObj2.onload = function() {
			context.drawImage(imageObj2,this.width*.4,0,imageObj2.width*.4,imageObj2.height*.4)
		};
		imageObj2.src = fileNameNr2;
		$('#download-container').show();
	}	
}

function FocusOnInput()
{
     document.getElementById("bfnr").focus();
}


function downloadCanvas(link, canvasId, filename) {
   	link.href = document.getElementById(canvasId).toDataURL("image/jpeg");
	link.download = filename;
}


$( document ).ready(function() {
	document.getElementById('download').addEventListener('click', function() {
	    downloadCanvas(this, 'baconfied', 'baconfy.jpg');
	}, false);
});
