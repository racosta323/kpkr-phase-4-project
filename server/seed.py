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
                )
            users.append(user)
            
        print("Adding users...")    
        db.session.add_all(users)    
        db.session.commit()

        print("Adding goals...")

        g1 = Goal(amount=float(fake.numerify()), goal_name = fake.sentence(), target_date = fake.future_date())
        g2 = Goal(amount=float(fake.numerify()), goal_name = fake.sentence(), target_date = fake.future_date())
        g3 = Goal(amount=float(fake.numerify()), goal_name = fake.sentence(), target_date = fake.future_date())

        goals = [g1, g2, g3]
        db.session.add_all(goals)
        db.session.commit()

        print("Adding user goals...")

        ug1= UserGoal(contributions=float(fake.numerify()), progress=.90, completed_date= fake.past_date(), goal_id= 2, user_id=rc(User.query.all()).id) 
        ug2= UserGoal(contributions=float(fake.numerify()), progress=.43, completed_date= fake.past_date(), goal_id= 3, user_id=rc(User.query.all()).id)
        ug3= UserGoal(contributions=float(fake.numerify()), progress=.70, completed_date= fake.past_date(), goal_id= 1, user_id=rc(User.query.all()).id)         

        user_goals = [ug1, ug2, ug3]
        db.session.add_all(user_goals)
        db.session.commit()

        print("Seeding complete!")