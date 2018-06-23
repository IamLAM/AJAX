$(document).ready(function(){
                         
      var c,c1;
             
                                                 
      $("#buscar").click(function(e){
		  
		  
           //  c = $("#user").val();
                                      
             $("#resultado").delay(1000).queue(function(n) {      
                                           
                  $("#resultado").html('<img src="img/loader.gif" />');
                                           
                      $.ajax({
                              type: "POST",
                              url: "info.php",
                              // forma completa data: $("#formUser").serialize(),
							  data: {
								user:  $("#user").val(),
								email:$("#email").val()
								  
							  },
							  
                              dataType: "html",
                              error: function(){
                                    alert("error petición ajax");
                              },
                              success: function(data){                                                      
                                    $("#resultado").html(data);
                                    n();
                              }
                  });
                                           
             });
                                
      });
                          
});