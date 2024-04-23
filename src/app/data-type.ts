export interface signUp{
    name:string,
    email:string,
    password:string
}

export interface signin{
  name:string,
  email:string,
  password:string
}
 export interface product{
    id:string,
    product:string,
    price:number,
    color:string,
    category:string,
    image:string,
    description:string,
    quantity: undefined|number
 }
