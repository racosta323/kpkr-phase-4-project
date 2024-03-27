from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from datetime import date, datetime

from config import db, bcrypt

# Models go here!
class AuthUser(db.Model, SerializerMixin):
    __tablename__ = 'auth_users'

    serialize_rules = ('-created_at', '-updated_at', '-_password_hash')

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    userId = db.Column(db.Integer, db.ForeignKey("users.id"))

    user = db.relationship("User", back_populates='auth_users')

    @property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        byte_object = password.encode('utf-8')
        bcrypt_hash = bcrypt.generate_password_hash(byte_object)
        hash_object_as_string = bcrypt_hash.decode('utf-8')
        self._password_hash = hash_object_as_string

    def authenticate(self, password):
        return bcrypt.check_password_hash(self.password_hash, password.encode('utf-8'))


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-user_goals.user',)

    id=db.Column(db.Integer, primary_key=True)
    first_name=db.Column(db.String, nullable=False)
    last_name=db.Column(db.String, nullable=False)
    created_at=db.Column(db.DateTime, server_default=db.func.now())
    updated_at=db.Column(db.DateTime, onupdate=db.func.now())

    user_goals = db.relationship("UserGoal", back_populates='user')
    goals = association_proxy('user_goals', 'goal')
    auth_users = db.relationship("AuthUser", back_populates='user')

    def __repr__(self):
        return f'<User Id: {self.id}, first_name = {self.first_name}, last_name = {self.last_name}>'
    
#many-to-many
class UserGoal(db.Model, SerializerMixin):
    __tablename__ = 'user_goals' 

    serialize_rules = ('-user.user_goals', '-goal.user_goals',)

    id=db.Column(db.Integer, primary_key=True)
    contributions = db.Column(db.Integer, nullable=False)
    progress=db.Column(db.Integer)
    #taking out nullable temporarily
    completed_date=db.Column(db.DateTime)
    created_at=db.Column(db.DateTime, server_default=db.func.now())
    goal_id = db.Column(db.Integer, db.ForeignKey("goals.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    user = db.relationship('User', back_populates='user_goals')
    goal = db.relationship('Goal', back_populates='user_goals')
    
    @validates('progress')
    def validate_progress(self,key,new_progress):
        if 0 > new_progress or new_progress > 100:
            raise ValueError('Number must be between 0 and 100')
        return new_progress
    
     #add validation to date/time -> figure out how to make to a future date and a date after the goal date
    

    def __repr__(self):
        return f'<User Goal Id: {self.id}, Contributions: {self.contributions}, Progress: {self.progress}, Completed Date: {self.completed_date}, Goal ID: {self.goal_id}, User ID:{self.user_id} >'
    
    
class Goal(db.Model, SerializerMixin):
    __tablename__ = 'goals' 

    serialize_rules = ('-user_goals.goal',)

    id=db.Column(db.Integer, primary_key=True)
    amount=db.Column(db.Integer, nullable=False)
    goal_name=db.Column(db.String, nullable=False)
    target_date=db.Column(db.DateTime)
    created_at=db.Column(db.DateTime, server_default=db.func.now())

    user_goals = db.relationship('UserGoal', back_populates='goal')
    user = association_proxy('user_goals', 'user')

    #add validation to date/time -> figure out how to make to a future date
    # @validates('target_date')
    # def validate_target_date(self, key, new_date):
    #     if datetime.strptime(new_date, '%Y,%m,%d %H:%M:%S.%f') < date.today():
    #         raise ValueError('Date must be in the future')
    #     return new_date

    @validates('amount')
    def validate_amount(self, key, new_amount):
        if int(new_amount) < 0:
            raise ValueError('Amount must be greater than or equal to 0')
        return new_amount

    def __repr__(self):
        return f'<Goal ID: {self.id}, Goal Name: {self.goal_name}, Goal Amount: {self.amount}, Target Date: {self.target_date} >'