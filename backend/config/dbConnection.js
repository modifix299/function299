const mongoose = require('mongoose');


// to query the database with invalid or unknown fields
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Achchuthan:ukistu14@cluster1.svc0tun.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log('Connected to the database.');
        } catch (error) {
          console.error('Failed to connect to the database:', error);
        }
    }

module.exports = connectDB;