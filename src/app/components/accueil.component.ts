import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';

// user-profile.ts
@Component({
  selector: 'user-profile',
  templateUrl: './accueil.component.html',
  imports: [
         FormsModule
    ]
})
export class UserProfile {
    

 nomb: number | null = null;
  message1: string = '';

 nomb2: number | null = null;
  message2: string = '';

 

verifier(): void {
  if (this.nomb !== null && this.nomb2 !== null) {
    this.message1 = this.nomb.toString() + this.nomb2.toString();
  } else {
    this.message1 = "Veuillez entrer deux nombres";
  }
}
  }