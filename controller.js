$(document).ready(function(){
                         
      var consulta;
             
                                                 
      $("#buscar").click(function(e){
		  
		  
             consulta = $("#user").val();
                                      
             $("#resultado").delay(1000).queue(function(n) {      
                                           
                  $("#resultado").html('<img src="img/loader.gif" />');
                                           
                        $.ajax({
                              type: "POST",
                              url: "info.php",
                              data: "user="+consulta,
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