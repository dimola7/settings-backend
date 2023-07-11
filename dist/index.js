"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)());
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
app.get('/api/roles', (req, res) => {
    res.json(data);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map