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
    def delete(self, id):
        user = User.query.get(id)
        db.session.delete(user)
        db.session.commit()

        #figure out how to send a response back --> no content when the below used
        # return make_response({"comment": "user delete"}, 204)
        return make_response({}, 204)

api.add_resource(UsersById, '/users/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

