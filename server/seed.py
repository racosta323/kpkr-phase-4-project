#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, UserGoal, Goal

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
        print('Deleting Data....')
        User.query.delete()
        UserGoal.query.delete()
        Goal.query.delete()

        users = []

        for n in range(5):
            user = User(
                first_name=fake.first_name(),
                last_name = fake.last_name(),
                account_balance=fake.pricetag()
                )
            users.append(user)
            
        print("Adding users...")    
        db.session.add_all(users)    
        db.session.commit()

        print("Adding goals...")

        g1 = Goal(amount=fake.pricetag(), name = fake.sentence(), target_date = fake.future_date(), goal_id=rc(User.query.all()).id)
        g2 = Goal(amount=fake.pricetag(), name = fake.sentence(), target_date = fake.future_date(), goal_id=rc(User.query.all()).id)
        g3 = Goal(amount=fake.pricetag(), name = fake.sentence(), target_date = fake.future_date(), goal_id=rc(User.query.all()).id)

        goals = [g1, g2, g3]
        db.session.add_all(goals)
        db.session.commit()

        print("Adding user goals...")

        ug1= UserGoal(contributions=fake.pricetag(), progress="0.9", completed_date= fake.future_date(), goal_id= rc(Goal.query.all()).id) 
        ug2= UserGoal(contributions=fake.pricetag(), progress="0.9", completed_date= fake.future_date(), goal_id= rc(Goal.query.all()).id)
        ug3= UserGoal(contributions=fake.pricetag(), progress="0.9", completed_date= fake.future_date(), goal_id= rc(Goal.query.all()).id)         

        user_goals = [ug1, ug2, ug3]
        db.session.add_all(user_goals)
        db.session.commit()

        print("Seeding complete!")