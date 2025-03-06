from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    role = db.Column(db.Text, nullable=False)
    img_url = db.Column(db.String(250), nullable=True)

    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'role': self.role,
            'img_url': self.img_url
        }