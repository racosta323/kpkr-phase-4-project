#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import User, Goal, UserGoal

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class Users(Resource):
    def post(self):
        new_user = User(first_name=request.get_json()["firstName"], last_name=request.get_json()["lastName"])
        db.session.add(new_user)
        db.session.commit()

        return make_response(new_user.to_dict(), 201)

api.add_resource(Users, '/users')

class UsersById(Resource):
    def get(self,id):
        user = User.query.get(id)
        return make_response(user.to_dict())

    def patch(self,id):
        user = User.query.get(id)

        request_body = request.json

        for attr in request_body:
            setattr(user, attr, request_body[attr])

        db.session.commit()

        return make_response(user.to_dict())     

    def delete(self, id):
        user = User.query.get(id)
        db.session.delete(user)
        db.session.commit()

        #figure out how to send a response back --> no content when the below used
        # return make_response({"comment": "user delete"}, 204)
        return make_response({}, 204)

api.add_resource(UsersById, '/users/<int:id>')


class Goals(Resource):
    def post(self):
        goal = Goal(
            amount=request.get_json()["goalAmt"],
            goal_name=request.get_json()["goalName"],
            # target_date=request.get_json()["target_date"]
            )
        
        db.session.add(goal)
        db.session.commit()

        return make_response(goal.to_dict(), 201)

api.add_resource(Goals, '/goals')

class GoalById(Resource):
    def delete(self,id):
        goal = Goal.query.get(id)

        db.session.delete(goal)
        db.session.commit()

        return make_response({}, 204)

api.add_resource(GoalById, '/goals/<int:id>')

class UserGoals(Resource):
    def post(self):

        request_body = request.json
        
        user_goal = UserGoal(
            contributions=request_body['contributions'],
            progress=request_body['progress'],
            completed_date=request_body['completed_date'],
        )

        db.session.add(user_goal)
        db.session.commit()

        return make_response(user_goal.to_dict(), 201)

api.add_resource(UserGoals, '/usergoals')    

class UserGoalsById(Resource):
    def get(self, id):
        user_goal = UserGoal.query.get(id)
        return make_response(user_goal.to_dict())

    def patch(self,id):
        user_goal = UserGoal.query.get(id)

        request_body = request.json

        for attr in request_body:
            setattr(user_goal, attr, request_body[attr])

        db.session.commit()

        make_response(user_goal.to_dict())

    def delete(self,id):
        user_goal = UserGoal.query.get(id)
        db.session.delete(user_goal)
        db.session.commit()

        return make_response({}, 204)

api.add_resource(UserGoalsById, '/usergoals/<int:id>')
    

if __name__ == '__main__':
    app.run(port=5555, debug=True)

