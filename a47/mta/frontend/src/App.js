import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/health`)
      .then(res => res.json())
      .then(data => setMessage(JSON.stringify(data)))
      .catch(() => setMessage("API unreachable"));
  }, []);

  return (
    <div>
      <h2>Frontend UI</h2>
      <p>Backend Response:</p>
      <pre>{message}</pre>
    </div>
  );
}

export default App;

