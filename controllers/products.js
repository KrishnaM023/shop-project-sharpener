const product = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    product.push({title: req.body.title});
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    res.render('shop', {
        prods: product,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: product.length > 0,
        activeShop: true,
        productCSS: true
    })
};

exports.getContactUs = (req, res, next) => {
    res.render('contact-us', {
        pageTitle: 'Contact Us',
        path: '/contact/contact-us',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.postContactUS = (req, res, next) => {
    product.push({title: req.body.title});
    res.redirect('/success/contact-success');
};

exports.getContactSuccess = (req, res, next) => {
    res.render('contact-success', {
        pageTitle: 'Add Product',
        path: '/contact-success',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};