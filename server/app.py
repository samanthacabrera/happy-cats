from models import *
from services import *

@app.route('/')
def index():
    return 'Hello, from the backend'

@app.route('/cats', methods=['GET'])
def get_all_cats():
    cats = Cat.query.all()
    return jsonify([cat.to_dict() for cat in cats]), 200

@app.route('/cats', methods=['POST'])
def create_cat():
    data = request.get_json()
    new_cat = Cat(name=data['name'], age=data['age'], breed=data['breed'], description=data['description'], owner_id=data['owner_id'])
    db.session.add(new_cat)
    db.session.commit()
    return jsonify({'message': 'New cat profile created!'}), 201


if __name__ == "__main__":
    app.run(debug=True)