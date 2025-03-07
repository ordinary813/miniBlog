import requests

def request_create_user(username, role, password):   
    response = requests.post("http://127.0.0.1:5000/api/users", json={
        "username": username, 
        "role": role, 
        "password": password})
    print(response.json())

def get_all_friends():
    response = requests.get("http://127.0.0.1:5000/api/users")
    json_response = response.json()
    for user in json_response:
        print(user)

def request_delete_user(username):
    response = requests.delete(f"http://127.0.0.1:5000/api/users/{username}")
    print(response.json())

def request_update_user(username, new_role):
    response = requests.patch(f'http://127.0.0.1:5000/api/users/{username}', json={"role": new_role})
    print(response.json())

action = input("create/get/delete/update: ")

if action == 'create':
    print("Provide a user and a role")
    user = input("User: ")
    role = input("Role: ")
    password = input("Password: ")
    request_create_user(user, role, password)
elif action == 'get':
    print("Getting all users")
    get_all_friends()
elif action == 'delete':
    print("Provide a user to delete")
    user = input("User: ")
    request_delete_user(user)
elif action == 'update':
    print("Provide a user and a new role")
    user = input("User: ")
    role = input("New role: ")
    request_update_user(user, role)
