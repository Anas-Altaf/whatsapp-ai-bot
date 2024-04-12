import express from 'express';
import path from 'path';
import { WhatsAppClient } from './lib/WhatsAppClient'; // Assuming WhatsAppClient exists

const app = express();

// Run the existing WhatsApp logic (potentially in a separate process)
const whatsappClient = new WhatsAppClient();
whatsappClient.initializeClient(); // Start WhatsApp functionality

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

app.get('/', (req, res) => {
    // Optionally, fetch data for the web page if needed
    // ...

    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Send HTML
});

const port = process.env.PORT || 3000; // Use environment variable or default port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
