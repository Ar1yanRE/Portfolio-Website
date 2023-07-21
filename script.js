const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
  console.log(`Client connected with IP address ${socket._socket.remoteAddress}`);
});

<!DOCTYPE html>
<html>
<head>
  <title>Your Website</title>
</head>
<body>
  <h1>Welcome to Your Website!</h1>
  <p>This is the main page content.</p>

  <script>
    async function isIpFromIran(ipAddress) {
      const apiUrl = `http://ip-api.com/json/${ipAddress}`;
    
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        if (data.countryCode === 'IR') {
          return true; // The IP address is from Iran
        } else {
          return false; // The IP address is not from Iran
        }
      } catch (error) {
        console.error('Error fetching IP data:', error);
        return false; // Assume it's not from Iran if there's an error
      }
    }

    // Usage example:
    const ipAddressToCheck = '8.8.8.8'; // Replace with the IP address you want to check
    isIpFromIran(ipAddressToCheck).then(result => {
      if (result) {
        console.log('This IP address is from Iran.');
        window.location.replace('vpn.html');
      } else {
        console.log('This IP address is not from Iran.');
      }
    });
  </script>
</body>
</html>
