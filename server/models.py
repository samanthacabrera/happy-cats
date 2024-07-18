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

class ActivityLevelEnum(Enum):
    LOW = 'Low'
    MODERATE = 'Moderate'
    HIGH = 'High'

class TemperamentEnum(Enum):
    PLAYFUL = 'Playful'
    RELAXED = 'Relaxed'
    SHY = 'Shy'
    ADVENTUROUS = 'Adventurous'

class AffectionLevelEnum(Enum):
    RESERVED = 'Reserved'
    MODERATE = 'Moderate'
    HIGH = 'High'

class EnergyLevelEnum(Enum):
    LOW = 'Low-energy'
    MEDIUM = 'Medium-energy'
    HIGH = 'High-energy'

class SocializationEnum(Enum):
    FRIENDLY_WITH_CATS = 'Friendly with cats'
    FRIENDLY_WITH_DOGS = 'Friendly with dogs'
    FRIENDLY_WITH_OTHER_ANIMALS = 'Friendly with other animals'

class IndependenceEnum(Enum):
    SOLO = 'Prefers solo activities'
    COMPANY = 'Enjoys company'

class CuriosityEnum(Enum):
    INQUISITIVE = 'Inquisitive'
    CAUTIOUS = 'Cautious'

class CuddlinessEnum(Enum):
    LOVES_CUDDLING = 'Loves cuddling'
    PERSONAL_SPACE = 'Prefers personal space'

class Cat(db.Model):
    __tablename__ = 'cats'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    breed = db.Column(db.String(50), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    # Enum columns
    activity_level = db.Column(db.Enum(ActivityLevelEnum), nullable=True)
    temperament = db.Column(db.Enum(TemperamentEnum), nullable=True)
    affection_level = db.Column(db.Enum(AffectionLevelEnum), nullable=True)
    energy_level = db.Column(db.Enum(EnergyLevelEnum), nullable=True)
    socialization = db.Column(db.Enum(SocializationEnum), nullable=True)
    independence = db.Column(db.Enum(IndependenceEnum), nullable=True)
    curiosity = db.Column(db.Enum(CuriosityEnum), nullable=True)
    cuddliness = db.Column(db.Enum(CuddlinessEnum), nullable=True)

    def __init__(self, name, age, breed, owner_id, activity_level=None, temperament=None, affection_level=None, energy_level=None, socialization=None, independence=None, curiosity=None, cuddliness=None):
        self.name = name
        self.age = age
        self.breed = breed
        self.owner_id = owner_id
        self.activity_level = activity_level
        self.temperament = temperament
        self.affection_level = affection_level
        self.energy_level = energy_level
        self.socialization = socialization
        self.independence = independence
        self.curiosity = curiosity
        self.cuddliness = cuddliness

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'age': self.age,
            'breed': self.breed,
            'owner_id': self.owner_id,
            'activity_level': self.activity_level.value if self.activity_level else None,
            'temperament': self.temperament.value if self.temperament else None,
            'affection_level': self.affection_level.value if self.affection_level else None,
            'energy_level': self.energy_level.value if self.energy_level else None,
            'socialization': self.socialization.value if self.socialization else None,
            'independence': self.independence.value if self.independence else None,
            'curiosity': self.curiosity.value if self.curiosity else None,
            'cuddliness': self.cuddliness.value if self.cuddliness else None,
        }