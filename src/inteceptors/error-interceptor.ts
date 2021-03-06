import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log('passou inteceptor');
        return next.handle(req)
                    .catch((error,caught)=>{
                        //retorna somente o error vindo do Http
                        let errorObj=error;
                        if (errorObj.error){
                            errorObj=errorObj.error;
                        }
                        //se não for json transforma em um.
                        if(!errorObj.status){
                            errorObj=JSON.parse(errorObj);
                        }
                        console.log("Erro Detectado")
                        console.log(errorObj);
                        return Observable.throw(errorObj);
                    }) as any;
    }

}
export const ErrorInterceptorProvider={
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorInterceptor,
    multi:true,
}