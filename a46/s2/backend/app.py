from flask import Flask
import os

app = Flask(__name__)

@app.route("/write")
def write_message():
    os.makedirs("/data", exist_ok=True)
    with open("/data/message.txt", "w") as f:
        f.write("Hello from the backend container! Updated Content")
    return "Message written successfully!"
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
