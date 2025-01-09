from flask import request, jsonify, Blueprint
from mi_app import db
from mi_app.catalogo.modelos import Product
from mi_app.catalogo.modelos import Category
catalog = Blueprint('catalog', __name__)
@catalog.route('/')
@catalog.route('/home')
def home():
    return "Bienvenido al catálogo de productos."
"""
Creamos endpoint para mostrar resultado cuando se busque
un producto especifico por ID
"""
@catalog.route('/product/<id>')
def product(id):
    product = Product.query.get_or_404(id)
    return f'Product - {product.name}, ${product.price}, category - {product.category}'

"""
Creamos endpoint que devuelve una lsita de todos los 
productos de la base de datos en formato JSON
"""
@catalog.route('/products')
def products():
    products = Product.query.all()
    res = {}
    for product in products:
        res[product.id] = {
            'name': product.name,
            'price': str(product.price),
            'category': product.category
        }
        return jsonify(res)
    
@catalog.route('/categories')
def categories():
    category = Category.query.all()
    dat = {}
    for categories in categories:
        dat[product.id] = {
            'name': product.name,
            'price': str(product.price),
            'category': product.category
        }
        return jsonify(res)
    
#Con este endpoint creamos un producto en la BD
@catalog.route('/product-create', methods=['POST',])
def create_product():
    name = request.form.get('name')
    price = request.form.get('price')
    product = Product(name, price)
    db.session.add(product)
    db.session.commit()
    return f'Product created - {product.name}, ${product.price}'

@catalog.route('/category-create', methods=['POST',])
def create_category():
    name = request.form.get('name')
    category = Category(name)
