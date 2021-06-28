import { Component } from "@angular/core";

@Component({
  selector: 'app-day3-data-binding',
  templateUrl: './day3-data-binding.component.html',
  styleUrls: ['./day3-data-binding.component.scss']
})

export class Day3DataBindingComponent {
  user = {
    name: 'Cao Văn Sơn',
    age: 27,
    height: '172 cm'
  }

  description: string = 'Mô tả hệ thống';

  onClickMe() {
    alert('Click Me!!!');
  }
}
