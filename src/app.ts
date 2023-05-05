import express from 'express';
import cors from 'cors';
import clientsRoute from './routes/client.route';
import policyRoute from './routes/policy.route';
const path = require('path');


const app = express()
const port = 3000

app.use(express.json());
app.use(cors());
app.use('/clients', clientsRoute)
app.use('/policies', policyRoute)

const start = async (): Promise<void> => {
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '/index.html'));
    });
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  }
  
void start()

export default app;
  
  