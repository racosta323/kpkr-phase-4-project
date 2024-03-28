#!/usr/bin/env python3

# Standard library imports
from datetime import datetime

# Remote library imports
from flask import request, make_response, session
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import User, Goal, UserGoal, AuthUser
import ipdb

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
        # date_object = datetime.strptime(request.get_json()["targetDate"], '%m/%d/%Y').date()

        goal = Goal(
            amount=request.get_json()["goalAmt"],
            goal_name=request.get_json()["goalName"],
            # target_date=date_object
            )
        
        db.session.add(goal)
        db.session.commit()

        return make_response(goal.to_dict(), 201)

api.add_resource(Goals, '/goals')

class GoalById(Resource):
    def get(self,id):
        goal = Goal.query.get(id)
        return make_response(goal.to_dict())

    def delete(self,id):
        goal = Goal.query.get(id)

        db.session.delete(goal)
        db.session.commit()

        return make_response({}, 204)
    
    def patch(self,id):
        goal = Goal.query.get(id)

        request_body = request.json

        for attr in request_body:
            setattr(goal, attr, request_body[attr])

        db.session.commit()

        return make_response(goal.to_dict())

api.add_resource(GoalById, '/goals/<int:id>')

class UserGoals(Resource):
    def get(self):
        user_goals = UserGoal.query.all()
        goals_list = [goals.to_dict() for goals in user_goals]
        return make_response(goals_list)

    def post(self):

        request_body = request.json
        
        user_goal = UserGoal(
            contributions=request_body['contributions'],
            # progress=request_body['progress'],
            # completed_date=request_body['completed_date'],
            goal_id = request_body['goalId'],
            user_id = request_body['userId']
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

        return make_response(user_goal.to_dict())

    def delete(self,id):
        user_goal = UserGoal.query.get(id)
        db.session.delete(user_goal)
        db.session.commit()

        return make_response({}, 204)

api.add_resource(UserGoalsById, '/usergoals/<int:id>')
    
class AuthUsers(Resource):
    def post(self):
        data = request.json
        try:
            user = AuthUser(username=data['username'])
            user.password_hash = data['password']

            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id
            response = make_response(user.to_dict(), 201)
        except:
            return make_response({'error': "something went wrong"}, 400)

        return response

api.add_resource(AuthUsers, '/authusers')

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = AuthUser.query.filter_by(username=data['username']).first()
    if not user:
        return make_response({'error': 'invalid username'}, 404)

    if user.authenticate(data['password']):
        session['user_id'] = user.id
        return make_response(user.to_dict(), 200)
    else:
        return make_response({'error': 'invalid username or password'}, 401)


@app.route('/authorized', methods=['GET'])
def authorized():
    user_id = session.get('user_id')
    if user_id:
        user = AuthUser.query.filter_by(id=user_id).first()
        return make_response(user.to_dict())
    else:
        return make_response({'error': 'Unauthorized'}, 401)

@app.route('/logout', methods=['DELETE'])
def logout():
    session['user_id'] = None
    return make_response({}, 204)


if __name__ == '__main__':
    app.run(port=5555, debug=True)

