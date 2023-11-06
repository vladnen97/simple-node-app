"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const repositories_1 = require("./repositories");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use('/products', routes_1.productsRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const startApp = async () => {
    await (0, repositories_1.run)();
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};
startApp();
