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
    

 age: number | null = null;
  message: string = '';

  verifier(): void {
    if (this.age === null) {
      this.message = "Veuillez entrer un âge.";
      return;
    }

    if (this.age > 18) {
      this.message = "Vous êtes majeur.";
    } else {
      this.message = "Vous êtes mineur.";
    }
  }
}