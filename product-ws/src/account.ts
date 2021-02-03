import { Router, Request, Response } from 'express'
import { veriyToken } from './auth';
export const accountController = Router()

export class Order {
    date!:string
    total!:number
    status!:string
}

let orders: Order[] = [
    {
      date: "01-01-2019",
      status: "DELIVERED",
      total: 1500.00
    },
    {
      date: "15-02-2019",
      status: "SHIPPED",
      total: 990.00
    },
    {
      date: "23-10-2019",
      status: "RECEIVED",
      total: 2500.00
    },   
  ]

  accountController.get("/order", (req: Request, res: Response) => {
    if (!veriyToken(req)) {
      res.status(403).send()
    } else {
      res.send(orders)
    }
})
