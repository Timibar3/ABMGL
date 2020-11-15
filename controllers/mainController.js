const fs =require('fs');
var productos = JSON.parse(fs.readFileSync(__dirname + '/../data/dataProduct.json'));

mainController = {
    home: function (req,res,next){
        res.render('home',{productos})
    },

};

module.exports = mainController;