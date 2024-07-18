from models import *
from services import *

def seed_users_and_cats():
    with app.app_context():
        
        db.drop_all()
        db.create_all()

        # Seed user
        user = User(name='Justin')
        db.session.add(user)
        db.session.commit()

        # Seed cats for Justin
        cat1 = Cat(
            name='Ares',
            age=3,
            breed='Maine Coon',
            owner_id=user.id,
            activity_level=ActivityLevelEnum.HIGH,
            temperament=TemperamentEnum.PLAYFUL,
            affection_level=AffectionLevelEnum.MODERATE,
            energy_level=EnergyLevelEnum.HIGH,
            socialization=SocializationEnum.FRIENDLY_WITH_CATS,
            independence=IndependenceEnum.COMPANY,
            curiosity=CuriosityEnum.INQUISITIVE,
            cuddliness=CuddlinessEnum.LOVES_CUDDLING
        )
        cat2 = Cat(
            name='Frida',
            age=2,
            breed='Siamese',
            owner_id=user.id,
            activity_level=ActivityLevelEnum.MODERATE,
            temperament=TemperamentEnum.RELAXED,
            affection_level=AffectionLevelEnum.HIGH,
            energy_level=EnergyLevelEnum.MEDIUM,
            socialization=SocializationEnum.FRIENDLY_WITH_DOGS,
            independence=IndependenceEnum.SOLO,
            curiosity=CuriosityEnum.CAUTIOUS,
            cuddliness=CuddlinessEnum.PERSONAL_SPACE
        )
        
        db.session.add(cat1)
        db.session.add(cat2)
        db.session.commit()

        print('Database seeded successfully!')

if __name__ == '__main__':
    seed_users_and_cats()
