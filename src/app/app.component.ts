import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup

  projectStatus = ['Stable', 'Critical', 'Finished']

  ngOnInit() {
    this.projectForm = new FormGroup ({
      'project': new FormControl('', Validators.required, this.forbiddenName.bind(this)),
      'mail': new FormControl(''),
      'status': new FormControl('stable')
    })
  }

  onSubmit() {
    console.log(this.projectForm)
  }

  forbiddenName(control: FormControl): Promise<any> | Observable<any> {

    const promise = new Promise((resolve, reject) => {
      if (control.value == 'Test') {
        resolve({'forbidden': true});
      }
      else {
        resolve(null)
      }
     
    })

    return promise;
  }
}

