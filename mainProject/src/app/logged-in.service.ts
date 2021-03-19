import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {

  constructor() { }

  logged=localStorage.getItem('id');

  loguserin( id:string){
   localStorage.setItem('id',id)
  } 

  loguserout(){
    localStorage.removeItem('id')
  }
}
