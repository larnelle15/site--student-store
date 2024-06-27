require('dotenv').config()
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const app = express();
const port = 3000;
const productRoutes = require('../routes/productroutes');
const orderRoutes = require('../routes/orderroutes');
const orderitemRoutes = require('../routes/orderitemsroutes');


app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/order-items', orderitemRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
