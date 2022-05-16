const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('DB CONNECTIOON SUCCESSFUL');
  });

  
// const testTour = new Tour({
//   name: 'The park camper',
//   rating: 4.8,
//   price: 500,
// }); ///Instance of the tour model

// testTour
//   .save() //save testTour Data
//   .then((doc) => console.log(doc))
//   .catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
