import { Router, Request, Response } from 'express'
import {sign, verify} from 'jsonwebtoken'

export const authController = Router()

export class User {
    email!:string
    name!:string
}

interface UserList {
  [key:string]: User; // Add index signature
}

let userList : UserList = {
  "daffy": {
    email: 'daffy@wb.com',
    name: 'Daffy Duck'
  },
  "sam": {
    email: 'sam@wb.com',
    name: 'Yosemite Sam'
  }
}

let secret = "happy-man"

authController.post("/login", (req: Request, res: Response) => {
  let userId:string = req.body.userId
  let user = userList[userId]

  if (user !== undefined) {
    let token = sign(user, secret)

    res.send({ token: token })
  } else {
    res.status(403).send()
  }
})


export function veriyToken(req: Request) : boolean {
  let token:string = "" + req.headers['authorization']

  if (!token) {
    return false
  }

  let preamble = 'Bearer '

  if (token.startsWith(preamble)) {
    // Remove Bearer from string
    token = token.slice(preamble.length, token.length);

    try {
      let user = verify(token, secret)

      return true
    } catch(e) {

    }
  }

  return false
}