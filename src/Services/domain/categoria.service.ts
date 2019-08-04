import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { CategoriaDTO } from "../../models/CategoriaDTO";
import { Observable } from "rxjs/Rx";
import { List } from "ionic-angular";

@Injectable()
export class CategoriaService{
    constructor(public http:HttpClient){
    }
    findAll():Observable<CategoriaDTO[]>{
        return  this.http
                    .get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }
}