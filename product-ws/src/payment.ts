import { Router, Request, Response } from 'express'
export const paymentController = Router()

paymentController.post("/validate", (req: Request, res: Response) => {
  let ccNumber = req.body.ccNumber

  res.send({ valid: luhn_check(ccNumber) })
})

paymentController.post("/", (req: Request, res: Response) => {
  setTimeout(_ => res.send({ success: true }), 5000)
})

function luhn_check(ccNumber:string) : boolean {
  let sum = 0;
  let alternate = false;

  for (let i = ccNumber.length - 1; i >= 0; i--) {
    let n = parseInt(ccNumber.substring(i, i + 1));
    
    if (alternate) {
      n *= 2;

      if (n > 9) {
        n = (n % 10) + 1;
      }
    }

    sum += n;
    alternate = !alternate;
  }

  return (sum % 10 == 0);
}