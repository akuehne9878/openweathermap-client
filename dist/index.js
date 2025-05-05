"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const port = 3000;
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
app.get('/weather/current/:city', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${apiKey}&units=metric`);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error fetching current weather:', error);
        res.status(500).send('Error fetching current weather');
    }
}));
app.get('/weather/forecast/:city', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`https://api.openweathermap.org/data/2.5/forecast?q=${req.params.city}&appid=${apiKey}&units=metric`);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error fetching weather forecast:', error);
        res.status(500).send('Error fetching weather forecast');
    }
}));
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
