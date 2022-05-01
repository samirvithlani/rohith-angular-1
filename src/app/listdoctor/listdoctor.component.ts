import { Component, OnInit } from '@angular/core';
import { DoctorserviceService } from '../doctorservice.service';

@Component({
  selector: 'app-listdoctor',
  templateUrl: './listdoctor.component.html',
  styleUrls: ['./listdoctor.component.css']
})
export class ListdoctorComponent implements OnInit {

  constructor(private service: DoctorserviceService) { }
  users: [] = []


  ngOnInit() {
    this.service.getAllDoctors().subscribe(res => {
      console.log("data=", res)
      this.users = res.data
    })
  }
  delete(id: number) {
    this.service.deleteDoctor(id).subscribe(res => {
      console.log(res)
      this.service.getAllDoctors().subscribe(res=>{
        this.users=res.data
      }

      )
    }
    )

  }

}
