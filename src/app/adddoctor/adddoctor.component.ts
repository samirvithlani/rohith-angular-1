import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DoctorserviceService } from '../doctorservice.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {

  constructor(private service: DoctorserviceService) { }
  doctorgroup = new FormGroup(
    {
      name: new FormControl(),
      email: new FormControl(),
      password:new FormControl()
    }

  )
    submit(){
      this.service.addUser(this.doctorgroup.value).subscribe(res=>{
        if(res.status==200){
          alert(res.msg)
        }
      })
    }


  ngOnInit() {
  }

}
