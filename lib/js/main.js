$(document).ready(function(){!function(){var a={lat:12.979158,lng:77.54861310000001},e=new google.maps.Map(document.getElementById("map"),{zoom:14,center:a});new google.maps.Marker({position:a,map:e}),google.maps.event.addListener(e,"idle",function(a){0===$(".place-card").length&&$(".gm-style").append('<div class="place-cardContainer"> <div style="padding: 1px; -webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; border-radius: 2px; background-color: white;"> <div> <div class="place-card place-card-large"> <div class="place-desc-large"> <div class="place-name"> Sapthagiri Palace </div><div class="address">No.15/18, 1 st main road,<br> Industrial town, Rajajinagar Bangalore 560044</div></div><div class="navigate"> <div class="navigate"> <a class="navigate-link" href="https://maps.google.com/maps?amp;z=16&t=m&hl=en-US&gl=PT&mapclient=embed&daddr=Sapthapadi+%26+Sapthagiri+Palace/@12.97939,77.548533" target="_blank"> <div class="icon navigate-icon"></div><div class="navigate-text"> Directions </div></a> </div></div><div class="review-box"> <div class="" style="display:none"></div><div class="" style="display:none"></div><div class="" style="display:none"></div><div class="" style="display:none"></div><div class="" style="display:none"></div><div class="" style="display:none"><div class="saved-from-source-link" style="display:none"> </div><div class="maps-links-box-exp"> <div class="time-to-location-info-exp" style="display:none"> <span class="drive-icon-exp experiment-icon"></span><a class="time-to-location-text-exp" style="display:none" target="_blank"></a><a class="time-to-location-text-exp" style="display:none" target="_blank"></a> </div></div><div class="time-to-location-privacy-exp" style="display:none"> <div class="only-visible-to-you-exp"> Visible only to you. </div><a class="learn-more-exp" target="_blank">Learn more</a> </div></div></div></div></div>')})}(),$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html, body").animate({scrollTop:a.offset().top},1e3),!1}}),$(".owl-carousel").owlCarousel({items:1,loop:!0,margin:10,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0}),$("[data-fancybox]").fancybox({});var a=function n(){var a=$("#Gallery .commonRight").height()-109;return $(".commonBorder.second").css("height",a),n}(),e=function s(){var a=$(".commonRight.PlaceSecond").height()-115;return $(".commonBorder.tri").height(a),s}(),i=function l(){var a=$(".commonLeft.leftEventBox").height()-53;return $(".commonBorder.Prime").css("height",a),l}();$(window).on("resize",function(){a(),e(),i()});var o=new Date("May 7, 2017 19:00:00").getTime(),t=setInterval(function(){var a=(new Date).getTime(),e=o-a,i=Math.floor(e/864e5),n=Math.floor(e%864e5/36e5),s=Math.floor(e%36e5/6e4);$(".commonCountDown").html(i+"Days "+n+"Hours "+s+"Minutes"),0>e&&(clearInterval(t),document.getElementById("demo").innerHTML="EXPIRED")});$(window).scroll(function(){$(this).scrollTop()?$("#top").fadeIn():$("#top").fadeOut()})


var MAX_PARTICLES = 500,
    MIN_ALPHA = 0.01,
    FPS = 30,
    
    canvas, context, stageWidth, stageHeight,
    
    mouseX = 0,
    mouseY = 0,
    lastX = 0,
    lastY = 0,
    active = false,
    particles = [];

$(document).ready(init);
init();
  
function init() {
  canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d'),
  resize();
  
  mouseX = stageWidth * 0.5;
  mouseY = stageHeight * 0.5;
  idleBurst();

  $(window).resize(resize);
  $(window).mousemove(function(event) {
    if(!active) {
      $('.start').fadeOut(600);
    }
    active = true;
    lastX = mouseX;
    lastY = mouseY;
		mouseX = event.pageX;
		mouseY = event.pageY;
		if(particles.length < MAX_PARTICLES) createParticle();
	});
	$(window).mousedown(function(event) {
		createBurst();
	});
	
	setInterval(onEnterFrame, 1000 / FPS);
}

function idleBurst() {
	if(!active) {
		createBurst();
		setTimeout(idleBurst, 1200);
	}
}

function resize() {
	stageWidth = $(window).width();
	stageHeight = $(document).height();
    alert(stageHeight);
	canvas.width = stageWidth;
	canvas.height = stageHeight;
}

function createParticle(burst) {
	var particle = {
		size: 3 + (Math.random() * 8),
		bounce: Math.random(),
		color: "#"+((1<<24)*Math.random()|0).toString(16),
		alpha: 1,
		fade: 0.93 + (Math.random() * 0.05),
		x: 0,
		y: 0,
		vx: 0,
		vy: 0,
		rotate: Math.random() * 360,
		rotateDir: (Math.random > 0.5) ? 7 : -7
	};
	particle.x = mouseX;
	particle.y = mouseY;
	particle.vx = (burst) ? (0.5 - Math.random()) * 20 : lastX - mouseX;
	particle.vy = (burst) ? (0.5 - Math.random()) * 20 : lastY - mouseY;
	particles.push(particle);
}

function createBurst() {
	var i = 40;
	while(--i > -1 && particles.length < MAX_PARTICLES) {
		createParticle(true);
	}
}

function onEnterFrame() {
	context.clearRect(0, 0, stageWidth, stageHeight);
	/*context.fillStyle = '#000000';
	context.globalAlpha = 0.1;
	context.fillRect(0, 0, stageWidth, stageHeight);*/
	
	var points = 5;
	var step, halfStep, start, n, dx, dy, outerRadius, innerRadius, angle;
	var particle;
	var i = particles.length;
	while(--i > -1) {
		particle = particles[i];
		particle.x += particle.vx;
		particle.y += particle.vy;
		
		if(particle.x - particle.size < 0) {
			particle.x = particle.size;
			particle.vx = -particle.vx * particle.bounce;
		}
		else if(particle.x + particle.size > stageWidth) {
			particle.x = stageWidth - particle.size;
			particle.vx = -particle.vx * particle.bounce;
		}
		
		if(particle.y - particle.size < 0) {
			particle.y = particle.size;
			particle.vy = -particle.vy * particle.bounce;
		}
		else if(particle.y + particle.size > stageHeight) {
			particle.y = stageHeight - particle.size;
			particle.vy = -particle.vy * particle.bounce;
		}
		
		context.fillStyle = particle.color;
		context.globalAlpha = particle.alpha;
		context.beginPath();
		
		outerRadius = particle.size;
		innerRadius = particle.size * 0.3;
		step = (Math.PI * 2) / points;
		halfStep = step / 2;
		start = (particle.rotate / 180) * Math.PI;
		context.moveTo( particle.x + (Math.cos( start ) * outerRadius), 
						particle.y - (Math.sin( start ) * outerRadius) );
		
		for(n = 1; n <= points; ++n) {
			dx = particle.x + Math.cos(start + (step * n) - halfStep) * innerRadius;
			dy = particle.y - Math.sin(start + (step * n) - halfStep) * innerRadius;
			context.lineTo( dx, dy );
			dx = particle.x + Math.cos(start + (step * n)) * outerRadius;
			dy = particle.y - Math.sin(start + (step * n)) * outerRadius;
			context.lineTo(dx, dy);
		}
		context.closePath();
		context.fill();
		
		particle.alpha *= particle.fade;
		particle.rotate += particle.rotateDir;
		
		if(particle.alpha <= MIN_ALPHA) {
			particles = particles.slice(0,i).concat(particles.slice(i+1));
		}
	}
}
});
