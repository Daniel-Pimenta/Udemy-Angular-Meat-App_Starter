import { PersistenceService, StorageType } from "angular-persistence";
import { Injectable }                      from "@angular/core";
import { CartItem }                        from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Tools }                           from "app/shared/tools"

@Injectable()
export class PersistService {

  items: CartItem[] = [];
  tools : Tools = new Tools();

  constructor(private persistenceService: PersistenceService){
    this.tools.logMe("PersistService...")
  }

  // will return true if successful
  set(name:string, obj :CartItem[]){
    this.tools.logMe(`PersistService.set(${name}, ${obj.length})`)
    this.persistenceService.set(name, obj, {type: StorageType.SESSION});
  }


  // returns scott
  get(name:string):CartItem[] {
    this.items = this.persistenceService.get(name, StorageType.SESSION);
    this.tools.logMe(`PersistService.get(${name}) -> ${this.items.length}`);
    return this.items;
  }


  // returns previous value (scott) and removes
  remove(name:string){
    this.tools.logMe(`PersistService.remove(${name})`)
    this.persistenceService.remove(name, StorageType.SESSION);
  }

  // clears all storage saved by this service, and returns a list
  // of keys that were removed
  removeAll(){
    this.tools.logMe("PersistService.removeAll()")
    this.persistenceService.removeAll(StorageType.SESSION);
  }


  //cleans the storage of expired objects
  clean(){
    this.tools.logMe("PersistService.clean()")
    this.persistenceService.clean(StorageType.SESSION);
  }


}
