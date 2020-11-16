import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

 constructor(private service: HttpClient) {}

  baseurl: string = 'http://192.168.3.18:8087/employee/save';

  CreateUser(object: any) {
    return this.service.post(this.baseurl, object);
  }
  getAllbyPage(pageno, pagesize) {
    return this.service.get(
      `http://192.168.3.18:8087/employee/getall/${pageno}/${pagesize}`
    );
  }
  updateEmployee(id: any, data: any) {
    return this.service.put(
      'http://192.168.3.18:8087/employee/update/',
      data
    );
  }
  getById(id: number) {
    return this.service.get(`http://192.168.3.18:8087/employee/getbyid/${id}`);
  }
  deleteEmployee(id: any) {
    return this.service.delete(
      `http://192.168.3.18:8087/employee/deletebyid/${id}`
    );
  }
}
