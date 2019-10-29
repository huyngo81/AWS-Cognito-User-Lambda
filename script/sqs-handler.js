console.log("hello javascript")

	var URL1 = 'https://mx07ysh8ib.execute-api.us-east-1.amazonaws.com/prod/vodostack'
 
console.log("URL1 = "+URL1) 
$('#submit_go').click(function (event) {
  console.log("test script");
//  event.preventDefault();
 
  var data = {
    name: $('#name').val(),
    email: $('#email').val(),
	region: $('#subject').val(),
	your_domain_name: $('#your_domain_name').val(),
	//description_email: $('#message').val() 
	aws_key: $('#aws_key').val(),
	aws_token: $('#aws_token').val()
  };
 
 console.log(JSON.stringify(data));
  
  $.ajax({
    type: 'POST',
    url: URL1,
		headers: {
        'x-api-key':'m5DmIBEMVX71XoNZys7vT3T3I2q1MRMI4OaynlWp',      
        'Content-Type':'application/json'
    },
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function(msg) {
							
							if (msg == 'OK') {
								result_html = '<div class="alert alert-success">Thanks for submit project</div>';						
								$("#contact-form #submit").detach();
								//$("#contact-form").clearForm();
								
								
							} else {
								result = JSON.stringify(msg);
								//result = msg;
								obj1 = JSON.parse(result);
								//console.log(result);
								result_html='<div class="alert alert-success">Submit failed</div>';					
							
								
							}
							
							//console.log ("result_html = " + result_html)
							
							$("#alert-area").html(result_html);
							$("#alert-area").focus();
							},
    error: function () {
      // show an error message
	  result = '<div>There was an error sending the message!</div>';
							$("#alert-area").html(result); 
    }
  })
})