import { Component , EventEmitter, Input, Output} from '@angular/core';

@Component({
  
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  @Input ({required: true}) user!: {
    id: string;
    avatar: string;
    name: string;
  };
  //@Input({required: true}) avatar!: string; 
  //@Input({required: true}) name!: string;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }



  onUserSelect() {
    this.select.emit(this.user.id);
  }
}
