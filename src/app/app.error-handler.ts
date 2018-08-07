import { HttpErrorResponse }  from "@angular/common/http"
import { Observable }         from "rxjs/Observable";
import { Tools }              from "app/shared/tools"
import                        "rxjs/add/observable/throw";

export class ErrorHandler {

  static handlerError(error:HttpErrorResponse | any){
    let tools : Tools = new Tools();
    tools.logMe("ErrorHandler")

    let errMsg : string
    if (error instanceof HttpErrorResponse ){
      const body = error.error;
      errMsg = `${error.url}: ${error.status} - ${error.statusText || ''} ${body}`
    }else{
      errMsg = error.message ? error.message : error.toString();
    }
    tools.logMe(errMsg)
    return Observable.throw(errMsg)
  }
}
