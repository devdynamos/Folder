const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://muhammadhamzamalik225:hamza_333@test.yw8ssyw.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000, // Increased to 30 seconds
    });
    console.log("Mongo Connected!");
  } catch (e) {
    console.log("Mongo Unsuccesful!", e);
  }
}

run();

app.use(cors());
app.use(express.json());

// Define a Product schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

const Product = mongoose.model('Product', productSchema);

app.get('/hello', (req, res) => {
  res.send('Hello from server');
});

app.post('/', async (req, res) => {
  const { name, price, image } = req.body;

  try {
    if (!name || !price) {
      console.error('Please fill in all the required fields.');
      return res.status(400).json({ success: false, error: 'Bad Request' });
    }

    const newProduct = new Product({ name, price, image });
    const savedProduct = await newProduct.save();
    res.json({ success: true, productId: savedProduct._id });
  } catch (error) {
    console.error('Could not save data', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
