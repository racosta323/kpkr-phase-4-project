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