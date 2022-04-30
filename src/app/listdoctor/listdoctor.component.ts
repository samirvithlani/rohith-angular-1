import { Component, OnInit } from '@angular/core';
import { DoctorserviceService } from '../doctorservice.service';

@Component({
  selector: 'app-listdoctor',
  templateUrl: './listdoctor.component.html',
  styleUrls: ['./listdoctor.component.css']
})
export class ListdoctorComponent implements OnInit {

  constructor(private service:DoctorserviceService) { }
  users:[]=[]


  ngOnInit() {
    this.service.getAllDoctors().subscribe(data =>{
      console.log("data=",data)
      this.users=data
    })
  }

}
