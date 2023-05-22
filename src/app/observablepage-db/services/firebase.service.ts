import { Injectable } from '@angular/core';
import { Good } from './Good';
import { Type } from './Type';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/compat/database'

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  goodListRef?:AngularFireList<any>;
  typeListRef?:AngularFireList<any>;
  bdRef?:AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  createGood(good:Good){
    return this.goodListRef?.push({
      name:good.name,
      type_id: good.type_id,
      manuf:good.manuf,
      count:good.count,
      price:good.price,
      date:good.date
    })
  }

  createType(type:Type){
    return this.typeListRef?.push({
      id:type.id,
      name: type.name
    })
  }

  getRecord(id:string, bd:string){
    this.bdRef = this.db.object('/' + bd + id);
    console.log("bdRef=" + this.bdRef.snapshotChanges());
    return this.bdRef;
  }

  // true - good
  // false - type
  getRecordList(bd: string, op:boolean){
    if (op) {
      this.goodListRef = this.db.list('/'+bd);
      return this.goodListRef;
    }
    else {
      this.typeListRef = this.db.list('/'+bd);
      return this.typeListRef;
    }
  }

  updateGood(  id:number, good:Good, bd:string){
    this.bdRef=this.db.object('/'+bd+'/'+id);
    return this.bdRef.update({
      name:good.name,
      type_id: good.type_id,
      manuf:good.manuf,
      count:good.count,
      price:good.price,
      date:good.date
    })
  }

  updateType(  id:number, type:Type, bd:string){
    this.bdRef=this.db.object('/'+bd+'/'+id);
    return this.bdRef.update({
      id:type.id,
      name: type.name
    })
  }

  deleteRecord(id:number, bd:string){
    this.bdRef=this.db.object('/'+bd+'/'+id);
    this.bdRef.remove();
  }
}
