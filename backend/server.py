# Filename - server.py
# ACCESS ON: http://127.0.0.1:5000/data, http://127.0.0.1:5000/
# check the routing


# Import flask and datetime module for showing date and time
from flask import Flask
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
@app.route('/')
def get_time_two():
 
    # Returning an api for showing in  reactjs
    return {
        'Name':"home", 
        "Age":"001",
        "Date":x, 
        "programming":"test"
        }
  
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)