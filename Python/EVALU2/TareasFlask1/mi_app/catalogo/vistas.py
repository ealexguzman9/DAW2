from flask  import request, jsonify, Blueprint
from mi_app import db
from mi_app.catalogo.modelos import Product, Category


catalog = Blueprint('catalog',__name__)

@catalog.route('/')
@catalog.route('/home')
def home():
    return "Bienvenido."


@catalog.route('/product/<id>')
def product(id):
    product = Product.query.get_or_404(id)
    return f"Producto - {product.name}, {product.price}€."


@catalog.route('/products')
def products():
    products = Product.query.all()
    res = {}
    for product in products:
        res[product.id] = {
            'name': product.name,
            'price': str(product.price),
            'category': product.category.name
        }
    return jsonify(res)
@catalog.route('/categories')
def categories():
    category = Category.query.all()
    res = {}
    for categ in category:
        res[categ.id] = {
            'name': categ.name
        }
    return jsonify(res)

@catalog.route('/product-create', methods=['POST'])
def create_product():
    
    name = request.args.get('name')
    price = request.args.get('price')
    categName = request.args.get('category')
    category = Category.query.filter_by(name=categName).first()
    if not category:
        category = Category(categName)
    product = Product(name,price,category)
    print(f"NOMBRE categoría del producto: {product.category.name}")    
    db.session.add(product)
    db.session.commit()
    print(f"NOMBRE del primer producto de la categoría del producto: {product.category.products.first().name}")
    return 'Product created.'

@catalog.route('/category-create', methods=['POST'])
def create_category():
    
    name = request.args.get('name')
    categ = Category(name)
    db.session.add(categ)
    db.session.commit()
    return 'Caregory created.'

