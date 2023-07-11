import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());

const data = [
    {
      id: 1,
      name: "superadmin",
      type: "default",
      dateCreated: "Jan 1, 2023",
      status: "active",
    },
    {
      id: 2,
      name: "Merchantadmin",
      type: "default",
      dateCreated: "Feb 1, 2023",
      status: "active",
    },
    {
      id: 3,
      name: "supportadmin",
      type: "default",
      dateCreated: "Jan 1, 2023",
      status: "active",
    },
    {
      id: 4,
      name: "sales personnel",
      type: "custom",
      dateCreated: "Jan 1, 2023",
      status: "active",
    },
    {
      id: 5,
      name: "Deputy sales personnel",
      type: "custom",
      dateCreated: "Jan 1, 2023",
      status: "active",
    },
    {
      id: 6,
      name: "Developeradmin",
      type: "system-custom",
      dateCreated: "Jan 1, 2023",
      status: "in active",
    },
    {
      id: 7,
      name: "Developer-basic",
      type: "system-custom",
      dateCreated: "Jan 1, 2023",
      status: "in active",
    },
  ];

app.get('/api/roles', (req: Request, res: Response) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});