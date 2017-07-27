import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {OutputName} from '../output';
import {DataService} from '../dataservice';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit, OnDestroy {
  outputName: OutputName = {
    name: ''
  };
  message: string;
  constructor(private router: Router, public dataservice: DataService) {
  }

  ngOnInit() {
  }

  onNext() {
    if (this.outputName.name.length > 0) {
      this.router.navigateByUrl('/show');
    }else {
      this.message = 'Add name to continue.';
    }
  }
  ngOnDestroy() {
    this.dataservice.output = this.outputName;
  }
}
