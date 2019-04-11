$(document).ready(function(){
    $('button').click(function(){
       var username=$("input:eq(0)").val();
       var password=$("input:eq(1)").val()
       $.ajax({
           url:'http://localhost:3000/user/add',
           type:'POST',
           dataType:'json',
           data:{ username:`${username}`,password:`${password}`},
           success:function(result){
             alert(result.msg);
             Login(username,password);
          },error:function(error){
            console.log(error);
          }
       }) 
    })
})