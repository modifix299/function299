const mongoose = require('mongoose');
const shortid = require('shortid');

const orderSchema = mongoose.Schema({
    orderId: {
        type: String,
        default: shortid.generate(), // Generate short ID as the default value
      },
    shippingInfo: [{
        name: {
            type: String,
            required: true
        },
        shippingaddress: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        }
    }],
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [{
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        // image: {
        //     type: String,
        //     required: true
        // },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
            ref: 'Product'
        }

    }],

    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
  
    orderStatus: {
        type: String,
        required: true,
        default: 'Processing'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

let orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel;