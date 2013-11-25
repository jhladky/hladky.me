from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/about/')
def base():
    return render_template("about.html");

@app.route("/projects/")
def projects():
    return render_template("projects.html");

@app.route("/art/")
def art():
    return render_template("art.html");

@app.route("/else/")
def elsePage():
    return render_template("else.html");

if __name__ == '__main__':
    app.run(debug = True)

