/* $.validator.setDefaults({
    submitHandler: function() {
        alert("submitted!");
    }
}); */



$(function(){
	var  $registerForm = $("#queryFrom");


  

	if($registerForm.length){
		$registerForm.validate({

			rules:{
          //username is the name of the textbox
          fname: {
              required: true,
              minlength: 3
        },

        lname:{required:true},
        cname:{required:true},
        email:{
            required: true,
            email:true
        },

        number:{
            required: true,
            number:true,
            minlength: 10
        },

        semploye:{
            required:true
        },

    scountry:{
        required:true
    },


          },
messages:{

	fname: {
        required: "This field is Required",
        minlength: "Must be 3 letters"
    },

    fname: {
        required: "Must be a valid email",
        
    },

    number:{

        minlength: "must be 10 digit"

    },

  
    
}


		})//validate

	}//if
	
})

