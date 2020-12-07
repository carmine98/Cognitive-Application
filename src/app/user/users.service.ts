import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private fireStore: AngularFirestore) { }

  formData!: User;

}
