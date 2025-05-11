import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
