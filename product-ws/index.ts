import express from "express"
import body from "body-parser"
import {catalogController} from './src/catalog'
import { paymentController } from "./src/payment";
import { authController } from "./src/auth";
import { accountController } from "./src/account";
 
const app = express()
 
app.use(body.json())
app.use("/api/catalog", catalogController)
app.use("/api/payment", paymentController)
app.use("/api/auth", authController)
app.use("/api/account", accountController)
        
const port = 8080
 
app.listen(port, () => console.log("Server started. Port:", port))
