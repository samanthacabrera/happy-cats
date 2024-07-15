from services import *

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)

    cats = db.relationship('Cat', backref='owner', lazy=True)

    def __init__(self, name):
        self.name = name
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }

class Cat(db.Model):
    __tablename__ = 'cats'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    breed = db.Column(db.String(50), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def __init__(self, name, age, breed, owner_id):
        self.name = name
        self.age = age
        self.breed = breed
        self.owner_id = owner_id
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'age': self.age,
            'breed': self.breed,
            'owner_id': self.owner_id
        }
