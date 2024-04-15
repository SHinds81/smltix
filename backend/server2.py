# ACCESS ON: http://127.0.0.1:5000/data, http://127.0.0.1:5000/
# check the routing

import time
from flask import Flask, request

app = Flask(__name__)

@app.route("/add", methods=["POST"], strict_slashes=False)
def add_articles():
    print('test test')
    title = request.json['title']
    body = request.json['body']
    
    print('title: ' + title)
    print('body: ' + body)

    return title

# Running app
if __name__ == '__main__':
    app.run(debug=True)