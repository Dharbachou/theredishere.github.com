$(document).ready(function(){
            $('#form').validate({
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true
                    },
                },
                messages: {
                    name: {
                        required:'Это поле обязательно для заполнения'
                    },
                     email: {
                        required:'Это поле обязательно для заполнения',
                        email:'Введите корректный e-mail'
                    },
                     password: {
                        required:'Это поле обязательно для заполнения'
                    }
                }
            });
        });        
