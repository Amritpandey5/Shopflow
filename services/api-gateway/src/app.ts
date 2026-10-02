import express ,{type Express } from "express";
import {createProxyMiddleware} from 'http-proxy-middleware'

const app = express() as Express;


app.use(
    '/users',
    createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
            "^/": "/users/",
        },
    })
)

app.use(express.json());

app.get('/health', (req, res) => {
   res.status(200).json({
    message: 'API Gateway is Running',
   })
})


export default app;