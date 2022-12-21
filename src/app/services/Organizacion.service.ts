import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Organizacion } from "../models/Organizacion.model";

@Injectable({
    providedIn: 'root'
  })

  export class OrganizacionService {

    constructor(private http: HttpClient) { }
  
    getOrganizacion(){
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
      return this.http.get("http://localhost:8091/api/organizacion/listar", { headers: headers });
    }
  
    createOrganizacion(organizacion: Organizacion){
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
      return this.http.post(`http://localhost:8091/api/organizacion/crear-organizacion`, organizacion, { headers: headers })
    }
  
    updateOrganizacion(organizacion: Organizacion){
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
      return this.http.put(`http://localhost:8091/api/organizacion/actualizar-organizacion/${ organizacion.id_organizacion }`, organizacion, { headers: headers })
    }
  
    
  
  }