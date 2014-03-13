function baconfy(bfnr){
	

	var fileNameNr1 = "./img/" + bfnr[0] + ".png"
	var fileNameNr2 = "./img/" + bfnr[1] + ".png"

	console.log(fileNameNr1)
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
	}

	
}

function FocusOnInput()
{
     document.getElementById("bfnr").focus();
}


function downloadCanvas() {
    var objCanvas = document.getElementById('baconfied');
    var dt = objCanvas.toDataURL();
    this.href = dt; //this may not work in the future..
}



