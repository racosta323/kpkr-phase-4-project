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

        

        incomes = [i1, i2, i3, i4, i5]
        db.session.add_all(incomes)
        db.session.commit()

        print("Adding expenses...")

        e1 = Expense(amount=fake.pricetag(), frequency= "monthly", user_id=User.query.get(1).id)
        e2 = Expense(amount=fake.pricetag(), frequency= "monthly", user_id=User.query.get(2).id)
        e3 = Expense(amount=fake.pricetag(), frequency= "monthly", user_id=User.query.get(3).id)
        e4 = Expense(amount=fake.pricetag(), frequency= "monthly", user_id=User.query.get(4).id)
        e5 = Expense(amount=fake.pricetag(), frequency= "monthly", user_id=User.query.get(5).id)

        expenses = [e1, e2, e3, e4, e5]
        db.session.add_all(expenses)
        db.session.commit()

        print("Adding goals...")

        g1 = Goal(amount=fake.pricetag(), goal= fake.sentence(), target_date=fake.future_date(), user_id=User.query.get(1).id)
        g2 = Goal(amount=fake.pricetag(), goal= fake.sentence(), target_date=fake.future_date(), user_id=User.query.get(2).id)
        g3 = Goal(amount=fake.pricetag(), goal= fake.sentence(), target_date=fake.future_date(), user_id=User.query.get(3).id)
        g4 = Goal(amount=fake.pricetag(), goal= fake.sentence(), target_date=fake.future_date(), user_id=User.query.get(4).id)
        g5 = Goal(amount=fake.pricetag(), goal= fake.sentence(), target_date=fake.future_date(), user_id=User.query.get(5).id)

        goals = [g1, g2, g3, g4, g5]
        db.session.add_all(goals)
        db.session.commit()

        print("Seeding complete!")