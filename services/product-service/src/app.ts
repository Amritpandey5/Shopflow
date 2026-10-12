import express , {type Express} from 'express'
import  productRoutes from './routes/product.routes.js'

const app:Express = express();

app.use(express.json());

app.get('/',(req,res)=>{
    return res.status(200).json({
        message:'Product service is running'
    })
})

app.use('/products',productRoutes);

export default app;