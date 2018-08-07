import { Injectable }   from "@angular/core";
import { Observable }   from "rxjs/Observable";
import { HttpClient }   from "@angular/common/http";
import { MEAT_JSON_DS } from "app/app.api";
import { User }         from "app/security/login/user.model";
import 'rxjs/add/operator/do'

@Injectable()
export class LoginService {

  json_url   : string;
  obs        : Observable<User>;
  userLogged : User;

  constructor (private http: HttpClient){
  }

  login(email : string, password : string) : Observable<User>{
    this.json_url = `${MEAT_JSON_DS}/login`;
    this.obs = this.http.post<User>(this.json_url,{email : email, password : password});
    return this.obs.do(user => this.userLogged = user);
  }

  isLogged() : boolean {
    return this.userLogged !== undefined;
  }

}
