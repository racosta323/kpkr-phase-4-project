from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from datetime import date, datetime

from config import db

#don't forget to migrate!

# Models go here!
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

    def __repr__(self):
        return f'<User Id: {self.id}, first_name = {self.first_name}, last_name = {self.last_name}>'
    
#many-to-many
class UserGoal(db.Model, SerializerMixin):
    __tablename__ = 'user_goals' 

    serialize_rules = ('-user.user_goals', '-goal.user_goals',)

    id=db.Column(db.Integer, primary_key=True)
    contributions = db.Column(db.Integer, nullable=False)
    progress=db.Column(db.Integer)
    completed_date=db.Column(db.DateTime, nullable=False)
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

    serialize_rules = ('-goal.user_goals',)

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
        if new_amount < 0:
            raise ValueError('Amount must be greater than or equal to 0')
        return new_amount

    def __repr__(self):
        return f'<Goal ID: {self.id}, Goal Name: {self.goal_name}, Goal Amount: {self.amount}, Target Date: {self.target_date} >'