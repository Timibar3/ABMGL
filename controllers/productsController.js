const fs =require('fs');
var productos = JSON.parse(fs.readFileSync(__dirname + '/../data/dataProduct.json'));


const productsController = {
    crear: function (req,res,next){
        res.render ('crear')
    },
    store: function (req,res,next){
        productos.push(req.body);

        let productosJSON = JSON.stringify(productos);
        fs.writeFileSync(__dirname + '/../data/dataProduct.json', productosJSON);
        
        res.render ('productoCreado')
    },
    edit: function (req,res,next){
        var idProduct = req.params.id;

        var foundProduct;
        for (i = 0; i < productos.length; i++){
            if(productos[i].id == idProduct) {
                foundProduct = productos[i];
                break;
            }
        }
        if (foundProduct){
            res.render('edit', {foundProduct})
        }else
        {
            res.send('Producto no encontrado')
        }
    },
    update: function(req,res,next){
        var idProduct = req.params.id;

        var updateid = productos.map(function(prod){
            if (prod.id == idProduct){
                let productoEdit = req.body;
                productoEdit.id = idProduct;
                return productoEdit;
            }
            return prod;
        });

        let editproductosJSON = JSON.stringify(updateid);
        fs.writeFileSync(__dirname + '/../data/dataProduct.json', editproductosJSON);

        res.send('Producto editado');
    },
    delete: function(req,res,next){
        var idProduct = req.params.id;

        var deleteProduct = productos.filter(function(prod){
            return prod.id != idProduct;
        });

        deleteProductosJSON = JSON.stringify(deleteProduct);
        fs.writeFileSync(__dirname + '/../data/dataProduct.json', deleteProductosJSON);

        res.send ('Producto Eliminado')
    }

};

module.exports = productsController;