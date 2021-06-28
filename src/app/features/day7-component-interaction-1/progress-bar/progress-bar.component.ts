import { Component, Input, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent{
  @Input() backgroundColor: string;
  @Input() progressColor: string;

  //Cách sử dụng getter/setter để validate input
  private $progress = 0;
  @Input() get progress(): number {
    return this.$progress;
  }

  set progress(value: number) {
    if(typeof value !== 'number') {
      const progress = Number(value);
      if(Number.isNaN(progress)) {
        this.$progress = 0;
      } else {
        this.$progress = progress;
      }
    } else {
      this.$progress = value;
    }
  }

  //Cách sử dụng ngOnChange để validate input
  // ngOnChanges(changes: SimpleChanges) {
  //   if('progress' in changes) {
  //     if(typeof(changes['progress'].currentValue !== 'number')) {
  //       const progress = Number(changes['progess'].currentValue);
  //       if(Number.isNaN(progress)) {
  //         this.progress = 0;
  //       } else {
  //         this.progress = progress;
  //       }
  //     }
  //   }
  // }
}
