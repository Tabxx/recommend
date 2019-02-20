$(document).ready(function () { 
    $('#login').click(function(){
       /* var username=$('#username').val();
        console.log(username);
        var password=$('#pwd').val();
        console.log(password);
        $.ajax({
            url:'http://localhost:3000/user/login',
            type:'GET',
            data: {
                username:`${username}`,
                password:`${password}`
            },
            success(result){
              console.log(result);
            },error:function(error){
                console.log(error);
                alert('失败');
            }
        })*/
        $.ajax({
            url: 'http://localhost:3000/user/login',
            data: {
                username:'Tab',
                password:'123456'
            },
            type: 'GET',
            success(result) {
                console.log(result);
                document.cookie = `userid=${result.userid}`
            }
        })
    })
})

   