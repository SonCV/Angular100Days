import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-day8-component-interaction-2',
  templateUrl: './day8-component-interaction-2.component.html',
  styleUrls: ['./day8-component-interaction-2.component.scss']
})

export class Day8ComponentInteraction2Component {
  authors: AuthorDetail[] = [
    {
      id: 1,
      firstName: 'Văn Sơn',
      lastName: 'Cao',
      email: 'soncv94@gmail.com',
      gender: 'Nam',
      ipAddress: '1.1.1.1'
    },
    {
      id: 2,
      firstName: 'Văn Hà',
      lastName: 'Cao',
      email: 'hacv94@gmail.com',
      gender: 'Nam',
      ipAddress: '3.3.3.3'
    }
  ];

  @Output() emitAuthor = new EventEmitter<AuthorDetail>();

  onViewDetail(author: AuthorDetail) {
    this.emitAuthor.emit(author);
  }
}

export interface AuthorDetail {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}
