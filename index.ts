import express, { Request, Response } from 'express';

const app = express();
const port = 5000;

const data = [
    {
      id: 1,
      name: "superadmin",
      type: "default",
      dateCreated: "Jan 1, 2023",
      status: "active",
      roleUsers: ["one", "two", "three"],
    },
    {
      id: 2,
      name: "Merchantadmin",
      type: "default",
      dateCreated: "Feb 1, 2023",
      status: "active",
      roleUsers: ["one", "two", "three"],
    },
    {
      id: 3,
      name: "supportadmin",
      type: "default",
      dateCreated: "Jan 1, 2023",
      status: "active",
      roleUsers: ["one", "two", "three"],
    },
    {
      id: 4,
      name: "sales personnel",
      type: "custom",
      dateCreated: "Jan 1, 2023",
      status: "active",
      roleUsers: ["one", "two", "three"],
    },
    {
      id: 5,
      name: "Deputy sales personnel",
      type: "custom",
      dateCreated: "Jan 1, 2023",
      status: "active",
      roleUsers: ["one", "two", "three"],
    },
    {
      id: 6,
      name: "Developeradmin",
      type: "system-custom",
      dateCreated: "Jan 1, 2023",
      status: "in active",
      roleUsers: ["one", "two", "three"],
    },
    {
      id: 7,
      name: "Developer-basic",
      type: "system-custom",
      dateCreated: "Jan 1, 2023",
      status: "in active",
      roleUsers: ["one", "two", "three"],
    },
  ];

app.get('/api/roles', (req: Request, res: Response) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});