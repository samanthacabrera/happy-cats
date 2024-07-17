from models import *
from services import *

@app.route('/')
def index():
    return 'Hello, from the backend'

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    if not user:
        print(f'User with id {user_id} not found')
        return jsonify({'error': 'User not found'}), 404
    print(f'User data: {user.to_dict()}')
    return jsonify(user.to_dict()), 200

@app.route('/users/<int:user_id>/cats', methods=['GET'])
def get_user_cats(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    cats = Cat.query.filter_by(owner_id=user_id).all()
    print(f'Cats data: {[cat.to_dict() for cat in cats]}')
    return jsonify([cat.to_dict() for cat in cats]), 200

@app.route('/cats/<int:cat_id>', methods=['GET'])
def get_cat(cat_id):
    cat = Cat.query.get(cat_id)
    if not cat:
        print(f'Cat with id {cat_id} not found')
        return jsonify({'error': 'Cat not found'}), 404
    print(f'Cat data: {cat.to_dict()}')
    return jsonify(cat.to_dict()), 200

@app.route('/cats', methods=['GET'])
def get_all_cats():
    cats = Cat.query.all()
    return jsonify([cat.to_dict() for cat in cats]), 200

@app.route('/cats', methods=['POST'])
def create_cat():
    data = request.get_json()
    new_cat = Cat(name=data['name'], age=data['age'], breed=data['breed'], owner_id=data['owner_id'])
    db.session.add(new_cat)
    db.session.commit()
    print(f'New cat created: {new_cat.to_dict()}')
    return jsonify({'message': 'New cat profile created!'}), 201

if __name__ == "__main__":
    app.run(debug=True)
