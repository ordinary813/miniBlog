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


def request_create_post(content, user_id):
    if requests.get(f"http://127.0.0.1:5000/api/users/{user_id}").status_code != 200:
        print("User not found")
        return
    response = requests.post("http://127.0.0.1:5000/api/posts", json={
        "content": content, 
        "user_id": user_id})
    print(response.json())

def get_all_posts():
    response = requests.get("http://127.0.0.1:5000/api/posts")
    json_response = response.json()
    for user in json_response:
        print(user)

def request_delete_posts(post_id):
    response = requests.delete(f"http://127.0.0.1:5000/api/posts/{post_id}")
    print(response.json())

while True:
    table = input("users/posts (or type 'q' to exit): ")

    if table == 'q':
        break

    if table == 'posts':
        while True:
            action = input("Posts - create/get/delete (or type 'b'): ")
            if action == 'b':
                break

            if action == 'create':
                print("Provide content and a user id")
                content = input("Content: ")
                user_id = input("User ID: ")
                request_create_post(content, user_id)
            elif action == 'get':
                print("Getting all posts")
                get_all_posts()
            elif action == 'delete':
                print("Provide a post id to delete")
                post_id = input("Post ID: ")
                request_delete_posts(post_id)
            print()
    elif table == 'users':
        while True:
            action = input("Users - create/get/delete/update  (or type 'b'): ")
            if action == 'b':
                break

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
            print()
    print()
