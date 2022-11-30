const score: Array<number> = []
const names: Array<string> = []

function intentityOne(val: boolean | number): boolean | number {
  return val
}

function indentityTwo(val: any): any {
  return val
}

function identityThree<Type>(val: Type): Type {
 return val 
}

// identityThree(true)

function identityFour<T>(val: T): T {
  return val
}

interface Bootle {
  brand: string,
  type: number
}

// identityFour<Bootle>({})

function getSearchProduct<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3
  return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
  // do some database operations
  const myIndex = 4
  return products[myIndex]
}

interface Database {
  connection: string,
  usarme: string,
  password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U): object {
  return {
    valOne,
    valTwo
  }
}

// anotherFunction(3, {})

interface Quiz {
  name: string,
  type: string
}

interface Course {
  name: string,
  author: string,
  subject: string
}

class Sellable<T> {
  public cart: T[] = []

  addToCart(products: T) {
    this.cart.push(products)
  }
}