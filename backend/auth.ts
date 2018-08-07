import { Request, Response} from 'express';
import { User, users }      from './user';
import * as jwt             from 'jsonwebtoken'
import { apiConfig }        from './api-config'

export const handleAutentication = (req:Request, resp:Response) => {
  let user: User = req.body;
  if (isValid(user)){
    let dbUser = users[user.email];
    let token = jwt.sign({sub:dbUser.email, iss:'meat-api'}, apiConfig.secret);
    resp.json({name:dbUser.name, email:dbUser.email, accessToken:token})
  }else{
    resp.status(403).json({message:'Dados inválidos.'})
  }
}

function isValid(user:User):boolean {
  if (!user) {
    return false;
  }
  let dbUser = users[user.email]
  return dbUser !== undefined && dbUser.matches(user)
}
