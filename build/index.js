"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.status(200).json({ api: 'UP' });
});
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});
