# Filename - server.py
# ACCESS ON: http://127.0.0.1:5000/data, http://127.0.0.1:5000/
# check the routing


# Import flask and datetime module for showing date and time
from flask import Flask, request
import datetime
 
x = datetime.datetime.now()
 
# Initializing flask app
app = Flask(__name__)
 
 
# Route for seeing a data
@app.route('/data')
def get_time():
 
    # Returning an api for showing in  reactjs
    return {
        'Name':"geeks", 
        "Age":"22",
        "Date":x, 
        "programming":"python"
        }


# Route for seeing a data
@app.route('/test')
def get_time_two():
 
    print('test test')

    # Returning an api for showing in  reactjs
    return {
        'Name':"home", 
        "Age":"001",
        "Date":x, 
        "programming":"test"
        }

#  route for seeing data
@app.route('/add_todo', methods=['POST'])
def post_data():
    name = request.json['name']
    age = request.json['age']
    date = request.json['date']
    programming = request.json['programming']

    print('post success')

    return {
        programming
    }

@app.route('/add_todo2', methods=['POST'])
def post_data2():
    name = request.json['name']
    age = request.json['age']

    print('post success')
    print('fda: ' + name)
    print('adf: ' + str(age))

    return {
    }
  
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)