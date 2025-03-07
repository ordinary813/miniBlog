from app import app, db
from flask import request, jsonify
from models import User, Post

# CRUD operations
# create, read, update, delete

# Get all users
@app.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    result = [user.to_json() for user in users]
    return jsonify(result)

# Add a new user
@app.route('/api/users', methods=['POST'])
def add_user():
    try:
        data = request.get_json()

        # Make sure all required fields are present
        required_fields = ['username', 'role', 'password']
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing {field} field"}), 400

        username = data.get('username')
        role = data.get('role')
        img_url = f'https://avatar.iran.liara.run/public?usearname=[{username}]'
        password = data.get('password')

        new_user = User(username=username, role=role, img_url=img_url, password=password)
        
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"msg": "User added successfully!"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@app.route('/api/users/<string:username>', methods=['DELETE'])
def delete_user(username):
    try:
        user = User.query.filter_by(username=username).first()
        if user is None:
            return jsonify({"error": "User not found"}), 404

        db.session.delete(user)
        db.session.commit()

        return jsonify("msg: User deleted successfully!"), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@app.route('/api/users/<string:username>', methods=['PATCH'])
def update_user_role(username):
    try:
        data = request.get_json()
        if 'role' not in data:
            return jsonify({"error": "Missing role field"}), 400
        new_role = data.get('role')

        user = User.query.filter_by(username=username).first()
        if user is None:
            return jsonify({"error": "User not found"}), 404
        
        user.role = new_role
        db.session.commit()

        return jsonify("msg: User updated successfully!"), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500