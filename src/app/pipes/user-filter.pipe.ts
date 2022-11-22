import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(UserList: any[],filterString:String,propName:any ): any[] {
    const result:any = []
    if(!UserList || filterString=="" || propName=="") {
      return UserList
    }
     UserList.forEach((user:any)=>{
      if (user[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        return result.push(user)
      }
     })
     return result
  }

}
