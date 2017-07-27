import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OutputName} from '../output';
import {DataService} from '../dataservice';
import {StyleColor} from '../style.color';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  outputName: OutputName;
  style: StyleColor;
  word: Array<string>;

  constructor(private router: Router, public dataservice: DataService) {
    this.style = new StyleColor;
  }

  ngOnInit() {
    this.outputName = this.dataservice.output;
    this.word = Array.from(this.outputName.name.toUpperCase()).reverse();
  }

  getColor( index ) {
    return this.style.color[index % this.style.color.length];
  }
  onBack() {
    this.router.navigateByUrl('');
  }
}
