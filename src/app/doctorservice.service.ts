import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {
  constructor(private http:HttpClient) { }
  public addUser(data):Observable<any>{
    return this.http.post("https://primeflixapis.herokuapp.com/api/register", data);
  }
 public getAllDoctors():Observable<any>{
  return this.http.get("https://primeflixapis.herokuapp.com/api/getusers/https://primeflixapis.herokuapp.com/api/login/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmQ0NWQwZjhkYmE5OTU0ZDljNzUxMyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTEzMjg0ODMsImV4cCI6MTY1MTU4NzY4M30.SGZcgBn_ejkzDciLD9N-CQsRxgNAWG3cKpwnLWdZdv8")
 }
}
