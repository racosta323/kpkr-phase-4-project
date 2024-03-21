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
        new_user = User(first_name=request.get_json()["first_name"], last_name=request.get_json()["last_name"])
        db.session.add(new_user)
        db.session.commit()

        return make_response(new_user.to_dict(), 201)

api.add_resource(Users, '/users')

class UsersById(Resource):
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
            amount=request.get_json()["amount"],
            goal_name=request.get_json()["goal_name"],
            target_date=request.get_json()["target_date"]
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

if __name__ == '__main__':
    app.run(port=5555, debug=True)

