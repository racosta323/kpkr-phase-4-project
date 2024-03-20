from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id=db.Column(db.Integer, primary_key=True)
    first_name=db.Column(db.String)
    last_name=db.Column(db.String)
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

    def __repr__(self):
        return f'<Income ID: {self.id}, Income amount: {self.amount}, Income frequency: {self.frequency}, User ID: {self.user_id} >'
    
    
class Goal(db.Model, SerializerMixin):
    __tablename__ = 'goals' 

    id=db.Column(db.Integer, primary_key=True)
    amount=db.Column(db.Integer, nullable=False)
    goal_name=db.Column(db.String, nullable=False)
    target_date=db.Column(db.DateTime)
    created_at=db.Column(db.DateTime, server_default=db.func.now())

    user_goal_id = db.Column(db.Integer, db.ForeignKey("user_goals.id"))

    def __repr__(self):
        return f'<Goal ID: {self.id}, Goal amount: {self.amount}, Goal: {self.frequency}, User ID: {self.user_id} >'