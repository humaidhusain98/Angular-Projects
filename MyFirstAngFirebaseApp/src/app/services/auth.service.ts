import { User } from './user';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable ,of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { Console } from 'console';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$:Observable<User>;



constructor(
  private afAuth:AngularFireAuth,
  private afs:AngularFirestore,
  private router:Router
) {
    this.user$=this.afAuth.authState.pipe(
      switchMap(user=>{
        if(user) {
                  return this.afs.doc<User>(`users/$(user.uid)`).valueChanges();

                }
        else{
                return of(null);
        }

      })
    );

 }


 async googleSignin(){
    const provider=new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    console.log(credential.user);
    this.router.navigate(['/secret'])
    return this.updateUserData(credential.user);

 }
 async signOut(){
  await this.afAuth.signOut();
  return this.router.navigate(['/login']);

 }

 private updateUserData({uid,email,displayName,photoURL}:User){
    const userRef:AngularFirestoreDocument<User>=this.afs.doc(`users/${uid}`);

    const data={
      uid,
      email,
      displayName,
      photoURL,
      
    };

    return userRef.set(data,{merge:true});

 }


}
