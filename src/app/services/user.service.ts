import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Maria Perez', email: 'maria.perez@example.com', role: 'Usuario', active: true },
    { id: 2, name: 'Juan Lopez', email: 'juan.lopez@example.com', role: 'Administrador', active: false }
  ];

  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.users);

  constructor() { }

  getUsers(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  addUser(user: User): void {
    // Simulamos un ID único para el nuevo usuario
    user.id = this.users.length + 1;
    this.users.push(user);
    this.usersSubject.next(this.users);
  }

  updateUser(user: User): void {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
      this.usersSubject.next(this.users);
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(u => u.id !== id);
    this.usersSubject.next(this.users);
  }
}

