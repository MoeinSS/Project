const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    phone: {
        type: String,
        require: true,
        validate: {
            validator: function(value) {
                return value.length > 11 && value.length < 11;
            },
            message: 'تعداد ارقام شماره تلفن همراه اشتباه است'
        }
    },
    password: {
        type: String,
        require: true,
        validate: {
            validator: function(value) {
                return value.length >= 6 && value.length <= 8;
            },
            message: 'رمز عبور باید بین 6 تا 8 کاراکتر باشد'
        }
    },
    
});