from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id=db.Column(db.Integer, primary_key=True)
    first_name=db.Column(db.String)
    last_name=db.Column(db.String)
    account_balance=db.Column(db.Integer, nullable=False)
    gross=db.Column(db.Integer)
    created_at=db.Column(db.DateTime, server_default=db.func.now())
    updated_at=db.Column(db.DateTime, onupdate=db.func.now())

    def __repr__(self):
        return f'<User Id: {self.id}, first_name = {self.first_name}, last_name = {self.last_name}, account_balance = {self.account_balance}>'
    

class Income(db.Model, SerializerMixin):
    __tablename__ = 'incomes' 

    id=db.Column(db.Integer, primary_key=True)
    amount=db.Column(db.Integer, nullable=False)
    frequency=db.Column(db.String, nullable=False)
    created_at=db.Column(db.DateTime, server_default=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    def __repr__(self):
        return f'<Income ID: {self.id}, Income amount: {self.amount}, Income frequency: {self.frequency}, User ID: {self.user_id} >'
    
class Expense(db.Model, SerializerMixin):
    __tablename__ = 'expenses' 

    id=db.Column(db.Integer, primary_key=True)
    amount=db.Column(db.Integer, nullable=False)
    frequency=db.Column(db.String, nullable=False)
    created_at=db.Column(db.DateTime, server_default=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    def __repr__(self):
        return f'<Expenses ID: {self.id}, Expenses amount: {self.amount}, Expenses frequency: {self.frequency}, User ID: {self.user_id} >'
    
class Goal(db.Model, SerializerMixin):
    __tablename__ = 'goals' 

    id=db.Column(db.Integer, primary_key=True)
    amount=db.Column(db.Integer, nullable=False)
    goal=db.Column(db.String, nullable=False)
    target_date=db.Column(db.DateTime)
    created_at=db.Column(db.DateTime, server_default=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    def __repr__(self):
        return f'<Goal ID: {self.id}, Goal amount: {self.amount}, Goal: {self.frequency}, User ID: {self.user_id} >'