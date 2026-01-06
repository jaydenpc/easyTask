import { Component , computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'; // import dummy users array from selected folder

// get a random index between 0 and the length of the DUMMY_USERS array
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})



// properties of Component class are usuable inside the template
export class UserComponent {
  public selectedUser = signal(DUMMY_USERS[randomIndex]); // select random user from the dummy users array

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  

  //get imagePath() {
  //  return 'assets/users/' + this.selectedUser.avatar;
  //}

  onUserSelect() {
    //console.log('clicked');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    //this.selectedUser = DUMMY_USERS[randomIndex];

  }
}
