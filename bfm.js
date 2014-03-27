function baconfy(bfnr){
	
	var fileNameNr1 = "./img/" + bfnr[0] + ".png"
	var fileNameNr2 = "./img/" + bfnr[1] + ".png"
	if (bfnr[0]==bfnr[1]) {
		fileNameNr2 = "./img/sz/" + bfnr[0] + "a.png"
	}

	var objCanvas = document.getElementById('baconfied');

	var eggOption = 'egg_' + $("input[type='radio'][name='opt-plate']:checked").val() + '_' + $("input[type='radio'][name='opt-egg']:checked").val();
	
	console.log (eggOption);

	var	offsetX = 70;
	var	offsetY = 138;

	if (eggOption == 'egg_plate_plain' || eggOption == 'egg_plate_chives') {
		// console.log ("Teller")
		objCanvas.width = 900;	
		objCanvas.height = 900;
		offsetX += 150;
		offsetY += 150;
	}
	else {
		//console.log ("Kein Teller");
		objCanvas.width = 600;
		objCanvas.height = 600;

	};

	if ( bfnr.length == 1 ) {
		offsetX += 223/2;
	};

	//objCanvas.width = objCanvas.width;


	if(objCanvas.getContext){
		var context = objCanvas.getContext('2d');	
		
		context.rect(0,0,objCanvas.width,objCanvas.height);
		context.fillStyle="#fff";
		context.fill();

		var imageEggs = new Image();
		var imageObj1 = new Image();
		var imageObj2 = new Image();
		var imageBfm = new Image();

		imageObj1.onload = function() {
			context.drawImage(imageObj1,offsetX,offsetY,imageObj1.width,imageObj1.height)
		};

		imageObj2.onload = function() {
			context.drawImage(imageObj2,offsetX+this.width,offsetY,imageObj2.width,imageObj2.height)
		};

		imageBfm.onload = function() {
			x = this.width * .20
			y = this.height * .20
			context.drawImage(imageBfm,objCanvas.width-x,objCanvas.height-y,x,y);
			console.log(objCanvas.width);
		};


		imageEggs.onload = function() {
			context.drawImage(imageEggs,0,0,imageEggs.width,imageEggs.height)
			imageObj1.src = fileNameNr1;
			imageObj2.src = fileNameNr2;
			//imageBfm.src = 'logo_me.jpg';
		};

		
		imageEggs.src = './img/' + eggOption + '.png';

		

		$('#download-container').show();
	
		var WH = $(window).height();  
		var SH = $('body')[0].scrollHeight;
		$('html, body').stop().animate({scrollTop: SH-WH-$('#about').height()-40}, 1000);
		incCounter();


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

function showHowto()
    {
   		$("div.howto").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }

function getCounter()
	{
		$.post('count.php', 'val=-1', function (response) {
      	$('#counter').text(response);
   		});		
	}

function incCounter() {
	$.post('count.php', 'val=' + $('#counter').text() , function (response) {
    	$('#counter').text(response);
   	});		
}


$( document ).ready(function() {
	document.getElementById('download').addEventListener('click', function() {
	    downloadCanvas(this, 'baconfied', 'baconfy.jpeg');
	}, false);
	console.log ( $("#bfnr").val() );
	
	if ( !$.isNumeric($("#bfnr").val() ) ) {
		setTimeout(showHowto,4000);	
	}
	
	$('#bfnr').on('input', function() {
    	$("div.howto").fadeOut(300);
    });

		
	$('ul > li > a').click(function() {
    	if ($(this).attr('class') != 'active') {
      		$('ul li div').slideUp();	
      		$(this).next().slideToggle();
      		$('ul li a').removeClass('active');
      		$(this).addClass('active');
    	}
    	return false;
  	});
		

	});

