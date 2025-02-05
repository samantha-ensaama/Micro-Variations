var positionY;
var scrollTop;

var lastPositionX =0;

$( document ).ready(function() {
    //récupérer les dimension de la fenêtre :
    var hauteurFenetre = $(window).width();
    var largeurFenetre = $(window).height();
    scrollTop = $(window).scrollTop(); //récupérer la "quantité" de scroll
    
    
////vous pouvez rédiger vos modification ici !



/////Ci-dessous la fonction permettant de déclancher des modifications en fonction du scroll




  $(window).on('mousemove', function(){
    positionY = event.pageY - scrollTop; // corection de la valeur de event.pageY pour qu'elle ne soit pas affectée par le scroll
  
    $("#fleur").css({
      "filter" : "hue-rotate(" + positionY*0.14 + "deg)",
    })

  }); 

  $(window).on('mousemove', function(event) {
    
    var mouseX = event.pageX;
     var windowWidth = $(window).width();
    var angle = (mouseX / windowWidth) * 360 - 180; 
    
    
    angle = Math.max(-180, Math.min(180, angle)); 
  
    
    $("#goutte5").css('transform', 'rotate(' + angle + 'deg) scale(1)');
  });

  $(window).on('mousemove', function(event) {
    
    var mouseX = event.pageX;
    
    
    var windowWidth = $(window).width();
    
    
    var angle = (mouseX / windowWidth) * 360 - 180; 
    
    
    angle = Math.max(-180, Math.min(180, angle)); 
  
    
    $("#goutte9").css('transform', 'rotate(' + angle + 'deg) scale(1)');
  });

  $(window).on('mousemove', function(event) {
    
    var mouseX = event.pageX;
    
   
    var windowWidth = $(window).width();
    
    
    var angle = (mouseX / windowWidth) * 360 - 180; 
    
    
    angle = Math.max(-180, Math.min(180, angle)); 
  
   
    $("#goutte3").css('transform', 'rotate(' + angle + 'deg) scale(1)');
  });

  $(window).on('mousemove', function(event) {
    
    var mouseX = event.pageX;
    
    
    var windowWidth = $(window).width();
    
    
    var angle = (mouseX / windowWidth) * 360 - 180; 
    
    
    angle = Math.max(-180, Math.min(180, angle)); 
  
    
    $("#goutte4").css('transform', 'rotate(' + angle + 'deg) scale(1)');
  });

  $(window).on('mousemove', function(event) {
    
    var mouseX = event.pageX;
    
    
    var windowWidth = $(window).width();
    
   
    var angle = (mouseX / windowWidth) * 360 - 180; 
    
    
    angle = Math.max(-180, Math.min(180, angle)); 
  
    
    $("#goutte6").css('transform', 'rotate(' + angle + 'deg) scale(1)');
  });

  $(window).on('mousemove', function(event) {
    
    var mouseX = event.pageX;
    
    
    var windowWidth = $(window).width();
    
    
    var angle = (mouseX / windowWidth) * 360 - 180; 
    
    
    angle = Math.max(-180, Math.min(180, angle)); 
  
   
    $("#goutte10").css('transform', 'rotate(' + angle + 'deg) scale(1)');
  });


  $( "body" ).on("click", ".clonable", function() {
    var clone = $(this).clone();
    var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var cloneHeight = clone.outerHeight();
    var cloneWidth = clone.outerWidth();

      clone.css({
        position: 'absolute',
        top: Math.random() * (windowHeight - clone.outerHeight()) + 'px',
        left: Math.random() * (windowWidth - clone.outerWidth()) + 'px' 
      });

      $("body").append(clone);

      

      
    })

    clone.on("click", function() {
      var clone2 = $(this).clone();
      clone2.css({
        position: 'absolute',
        top: Math.random() * (windowHeight - clone.outerHeight()) + 'px',  
        left: Math.random() * (windowWidth - clone.outerWidth()) + 'px'  
      });
      $("body").append(clone2);

    })


    $(window).on("scroll", function() {
      
      var scrollTop = $(window).scrollTop();
    
    
      
      console.log("Scroll position: " + scrollPosition);
    
      
      var redComponent = Math.min(255, Math.floor(scrollPosition / 3));  
      var blueComponent = Math.min(255, Math.floor(scrollPosition / 5)); 
    
      
      var backgroundColor = `linear-gradient(rgb(${redComponent}, 0, 0), rgb(0, 0, ${blueComponent}))`;
    
      
      $("main").css("background", backgroundColor);
    });
    




    /// décricre se qu'il se passe



 //////// ///ne rien écrire après ceci
});