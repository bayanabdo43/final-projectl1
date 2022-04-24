$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 2
    });
  });




  var form = document.getElementById("tform")

  form.aadeventlistener("input" , function(e){
      console.log("e.target.id")

      switch(e.target.id){
          case "username" :
              checkname(e.target)
          break
          case "useremail" :

          break

          case "userpass" :

          break
      }


  })

  function checkname(input){
      var inputvalue = input.value.trin()
    if(inputvalue.length <= 3) showerror("input")
    else showerror(input)
  }

  function showerror(element , msg){
      element.nextelementsibling.innertext = msg
  }