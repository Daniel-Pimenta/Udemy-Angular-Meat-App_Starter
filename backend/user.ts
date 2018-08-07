export class User{
  constructor(
    public email     :string,
    public name      :string,
    private password :string
  ){}

  matches(another:User):boolean{
    return another !== undefined && another.email === this.email && another.password === this.password;
  }
}

export const users: {[key:string]: User} = {
  "email1@gmail.com": new User('email1@gmail.com','Usuario 1','senha123'),
  "email2@gmail.com": new User('emails@gmail.com','Usuario 2','senha123')
}
