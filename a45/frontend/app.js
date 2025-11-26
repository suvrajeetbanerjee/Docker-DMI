import express from 'express';
import http from 'http';

const app = express();

// URL of backend container (Docker DNS resolves "backend" → container IP)
const backendURL = process.env.BACKEND_URL || 'http://backend';

app.get('/', (req, res) => {
    http.get(backendURL, (r) => {
        let data = '';

        r.on('data', (chunk) => {
            data += chunk;
        });

        r.on('end', () => {
            res.send(`
                <h2>Frontend connected to backend:</h2>
                <div style="padding:10px; background:#eef; border:1px solid #88a;">
                    ${data}
                </div>
            `);
        });

    }).on("error", (err) => {
        res.send("Error connecting to backend: " + err.message);
    });
});

app.listen(3000, () => {
    console.log("🚀 Frontend running on port 3000");
});

