import { Router, Request, Response } from 'express'
export const catalogController = Router()

export class Product {
    sku!:string
    name!:string
    description!:string
    image!:string
    price!:number
    rating!:number
}

let catalog: Product[] = [
    {
      sku: "HT-1000",
      name: "Notebook Basic 15",
      description: "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      price: 950,
      rating: 3.5,
      image: "assets/p1.jpg"
    },
    {
      sku: "HT-1010",
      name: "Notebook Professional 15",
      description: "Notebook Professional 15 with 2,80 GHz quad core, 15\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
      price: 1240.00,
      rating: 4.0,
      image: "assets/p2.jpg"
    },
    {
      sku: "HT-1001",
      name: "Notebook Basic 17",
      description: "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      price: 1105.00,
      rating: 2.5,
      image: "assets/p3.jpg"
    },
    {
      sku: "HT-1002",
      name: "Notebook Professional 17",
      description: "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
      price: 1350.00,
      rating: 4.8,
      image: "assets/p4.jpg"
    },
  ]

catalogController.get("/", (req: Request, res: Response) => {
    res.send(catalog)
})

catalogController.get("/search/:query", (req: Request, res: Response) => {
    let searchText = req.params["query"]

    let reg = new RegExp(searchText, 'i')

    let filteredCatalog = catalog.filter(p => 
      reg.test(p.name) || reg.test(p.description))

    if (filteredCatalog.length == 0) {
        res.status(404).send()
    } else {
        res.send(filteredCatalog)
    }
})