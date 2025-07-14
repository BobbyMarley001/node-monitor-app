const http = require('http');
const port = 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Node Monitor App</title>
  <style>
    body {
      margin: 0;
      font-family: "Segoe UI", sans-serif;
      background: linear-gradient(to right, #1f1c2c, #928dab);
      color: white;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    h1 {
      font-size: 3rem;
      margin: 0;
      animation: fadeInUp 1s ease-in-out;
    }

    p {
      margin-top: 10px;
      font-size: 1.2rem;
      opacity: 0.8;
    }

    @keyframes fadeInUp {
      from {
        transform: translateY(40px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .emoji {
      font-size: 4rem;
      margin-top: 20px;
      animation: bounce 2s infinite;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
  </style>
</head>
<body>
  <h1>Hello from Node.js!</h1>
  <p>Your Dockerized web app is up and running 🚀</p>
  <div class="emoji">🛠️</div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

