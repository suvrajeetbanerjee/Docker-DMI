from flask import Flask
import os

app = Flask(__name__)

@app.route("/")
def read_message():
    file_path = "/data/message.txt"
    if os.path.exists(file_path):
        with open(file_path, "r") as f:
            return f"Message: {f.read()}"
    else:
        return "No data found in volume."
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
