from models import *
from services import *

def seed_users_and_cats():
    with app.app_context():
        
        db.drop_all()
        db.create_all()

        # Seed users
        user1 = User(name='Alice')
        user2 = User(name='Bob')
        db.session.add(user1)
        db.session.add(user2)
        db.session.commit()

        # Seed cats for each user
        cat1_user1 = Cat(name='Fluffy', age=3, breed='Persian', owner_id=user1.id)
        cat2_user1 = Cat(name='Whiskers', age=2, breed='Siamese', owner_id=user1.id)
        cat1_user2 = Cat(name='Mittens', age=4, breed='Maine Coon', owner_id=user2.id)
        cat2_user2 = Cat(name='Felix', age=1, breed='British Shorthair', owner_id=user2.id)

        db.session.add(cat1_user1)
        db.session.add(cat2_user1)
        db.session.add(cat1_user2)
        db.session.add(cat2_user2)
        db.session.commit()

        print('Database seeded successfully!')


if __name__ == '__main__':
    seed_users_and_cats()
