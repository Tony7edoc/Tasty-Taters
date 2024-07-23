# Tasty Taters App in React & Redux + Django

```
Tasty Taters, with a frontend built in React & Redux and a backend built in Django API.
This is an online food menu service for Tasty Taters. When you visit the restaurant, you often use the QR code to load the PDF of the menu. It has no image and is not easy to select. So we created the menu app where you can see food images with the needed information and select your items easily. During such an unprecedented time and social distancing, online menu card technology is a boon! 
```

## Live Demo

**This App uses a Replit free plan, so I am afraid that it takes time to load the pages.**

Check out [FRONTEND LIVE DEMO](https://tasty-taters.netlify.app/) here!!

Check out [API LIVE DEMO](https://tasty-taters.onrender.com/) here!!

## Tech used

```
* Frontend : React & Redux
* Backend : Django
```

## How to Install

1. Git Clone

```
git clone git@github.com:Tech-i-s/techis-wd-forum-django-react.git
```

2. Backend setting

```
cd backend
Python -m venv env
(For Mac) source env/bin/activate
(For Windows) env/Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
# Open http://127.0.0.1:8000/posts/

# To have dummy data for testing run:
python manage.py loaddata fixtures/dummy_post.json
```

3. Frontend setting

```
cd frontend
npm install
npm start
# Open http://127.0.0.1:3000/
```
