from app import app, db
from flask import request, jsonify
from models import User, Post

# CRUD - create, read, update, delete

# User CRUD operations
# Get all users
@app.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    result = [user.to_json() for user in users]
    return jsonify(result)

# Get a user by id
@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.filter_by(id=user_id).first()
    if user is None:
        return jsonify({"error": "User not found"}), 404
    return jsonify(user.to_json())

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
# ... NEED TO ALSO DELETE POSTS OF USER
def delete_user(username):
    try:
        user = User.query.filter_by(username=username).first()
        if user is None:
            return jsonify({"error": "User not found"}), 404

        db.session.delete(user)
        db.session.commit()

        return jsonify({"msg": "User deleted successfully!"}), 200
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

        return jsonify({"msg": "User updated successfully!"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
@app.route('/api/users/', methods=['DELETE'])
def purge_users():
    try:
        users = User.query.all()
        if not users:
            return jsonify({"error": "No users found"}), 404

        for user in users:
            db.session.delete(user)
        db.session.commit()

        return jsonify({"msg": "User table purged."}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


# Post CRUD operations
@app.route('/api/posts', methods=['POST'])
def create_post():
    try:
        data = request.get_json()

        # Make sure all required fields are present
        required_fields = ['content', 'user_id']
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing {field} field"}), 400

        content = data.get('content')
        user_id = data.get('user_id')

        new_post = Post(content=content, user_id=user_id)
        
        db.session.add(new_post)
        db.session.commit()

        return jsonify({"msg": "Post added successfully!"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@app.route('/api/posts', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    result = [post.to_json() for post in posts]
    return jsonify(result)

@app.route('/api/posts', methods=['GET'])
def get_posts_by_userid(user_id):
    posts = Post.query.filter_by(user_id=user_id).all()
    result = [post.to_json() for post in posts]
    return jsonify(result)
    
@app.route('/api/posts/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
    try:
        post = Post.query.filter_by(id=post_id).first()
        if post is None:
            return jsonify({"error": "Post not found"}), 404

        db.session.delete(post)
        db.session.commit()

        return jsonify({"msg": "Post deleted successfully!"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
@app.route('/api/posts/', methods=['DELETE'])
def purge_posts():
    try:
        posts = Post.query.all()
        if not posts:
            return jsonify({"error": "No posts found"}), 404

        for post in posts:
            db.session.delete(post)
        db.session.commit()

        return jsonify({"msg": "Post table purged."}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500