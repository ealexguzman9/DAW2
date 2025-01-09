from mi_app import db
class Product(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(255))
    price = db.Column(db.Float)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    def __init__(self ,name, price):
        self.name = name
        self.price = price
        def __repr__(self):
            return f'<Product {self.id}'

class Category(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(255))
    category = db.relationship('Category')
    def __init__(self ,name):
        self.name = name
        