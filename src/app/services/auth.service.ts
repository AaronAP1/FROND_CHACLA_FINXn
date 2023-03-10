import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario.model';
import { IUsuario } from '../interfaces/Usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  usuarioLogged: IUsuario;

  constructor(private http: HttpClient) { }
  
  login(usuario: Usuario){
    return this.http.post("http://localhost:8091/api/login", usuario, {observe: 'response'});
  }

  getCategorias(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get("http://localhost:8090/api/categoria/get-all", { headers: headers });
  }

  getPayloadToken(token: string){
    let payload = JSON.parse(atob(token.split(".")[1]));
    delete payload.sub;
    delete payload.exp;
    this.usuarioLogged = payload;    
    localStorage.setItem("usuarioLogged", JSON.stringify(this.usuarioLogged))
  }

}
