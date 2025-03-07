import requests

users = [
    {"username": "bobbyman12", "role": "admin", "password": "12345"},
    {"username": "jimbosamba", "role": "user", "password": "123"},
    {"username": "jimjim", "role": "user", "password": "123"},
    {"username": "jimdoe", "role": "user", "password": "jd"},
    {"username": "trumpet", "role": "user", "password": "trump"},
    {"username": "jdvance", "role": "user", "password": "please"},
    {"username": "spectre", "role": "user", "password": "comm"},
    {"username": "paragon", "role": "user", "password": "par123"},
    {"username": "renegade", "role": "user", "password": "renren"},
    {"username": "jab", "role": "user", "password": "jab"},
    {"username": "tim", "role": "user", "password": "timothy"}
]

url = "http://127.0.0.1:5000/api/users"

for user in users:
    response = requests.post(url, json=user)
    print(f"Posted {user['username']}: {response.status_code}")