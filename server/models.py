from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db

#don't forget to migrate!

# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id=db.Column(db.Integer, primary_key=True)
    first_name=db.Column(db.String, nullable=False)
    last_name=db.Column(db.String, nullable=False)
    created_at=db.Column(db.DateTime, server_default=db.func.now())
    updated_at=db.Column(db.DateTime, onupdate=db.func.now())

    def __repr__(self):
        return f'<User Id: {self.id}, first_name = {self.first_name}, last_name = {self.last_name}>'
    

class UserGoal(db.Model, SerializerMixin):
    __tablename__ = 'user_goals' 

    id=db.Column(db.Integer, primary_key=True)
    contributions = db.Column(db.Integer, nullable=False)
    progress=db.Column(db.Integer)
    completed_date=db.Column(db.DateTime, nullable=False)
    created_at=db.Column(db.DateTime, server_default=db.func.now())
    goal_id = db.Column(db.Integer, db.ForeignKey("goals.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    @validates('progress')
    def validate_progress(self,key,new_progress):
        if 0 > new_progress or new_progress > 100:
            raise ValueError('Number must be between 0 and 100')
        return new_progress

    def __repr__(self):
        return f'<User Goal Id: {self.id}, Contributions: {self.contributions}, Progress: {self.progress}, Completed Date: {self.completed_date}, Goal ID: {self.goal_id}, User ID:{self.user_id} >'
    
    
class Goal(db.Model, SerializerMixin):
    __tablename__ = 'goals' 

    id=db.Column(db.Integer, primary_key=True)
    amount=db.Column(db.Integer, nullable=False)
    goal_name=db.Column(db.String, nullable=False)
    target_date=db.Column(db.DateTime)
    created_at=db.Column(db.DateTime, server_default=db.func.now())

    user_goal_id = db.Column(db.Integer, db.ForeignKey("user_goals.id"))

    @validates('amount')
    def validate_amount(self, key, new_amount):
        if new_amount < 0:
            raise ValueError('Amount must be greater than or equal to 0')
        return new_amount

    def __repr__(self):
        return f'<Goal ID: {self.id}, Goal Name: {self.goal_name}, Goal Amount: {self.amount}, Target Date: {self.target_date}, User Goal ID: {self.user_goal_id} >'