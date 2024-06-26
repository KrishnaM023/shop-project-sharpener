const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorControllers = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const successRoutes = require('./routes/success');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
//app.use('/contact', contactRoutes)
//app.use('/success', successRoutes);

app.use(errorControllers.get404);

app.listen(3000);
