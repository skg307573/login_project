import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  key:string="project"
  constructor(private toaster:ToastrService) { }

  logout(){
    localStorage.removeItem('UserDetails');
  }
  success(msg: string){
  this.toaster.success(msg, 'Success', {
    timeOut: 3000,
  })
  }
  warning(msg: string){
    this.toaster.warning(msg, 'Warning', {
      timeOut: 3000,
    })
  }
  error(msg:string){
    this.toaster.error(msg, 'Error', {
      timeOut: 3000,
    })
  }
   encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

   decrypt(txtToDecrypt: any) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }
}
