from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    role = db.Column(db.Text, nullable=False)
    img_url = db.Column(db.String(250), nullable=True)
    password = db.Column(db.String(25), nullable=False)

    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'role': self.role,
            'img_url': self.img_url,
            'password': self.password
        }

# Post model
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def to_json(self):
        return {
            'id': self.id,
            'content': self.content,
            'user_id': self.user_id
        }

# todo: Add the following models
# Like model
# Comment model
# Message model