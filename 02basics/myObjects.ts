// const User = {
//   name: "Facundo",
//   email: "facundo@gmail.com",
//   isActive: true
// }

// function createUser({ name: string, isPaid: boolean }) { }

// let newUser = {name: "Facundo", isPaid: false, email: "f@f.com"}

// createUser(newUser) // Me permite el email que no definí en createUser

// function createCourse(): { name: string, price: number }{
//   return {name: "reactjs", price: 399}
// }


// type User = {
//   name: string,
//   email: string,
//   isActive: boolean
// }

// function createUser(user: User):User {
//   return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})



// type User = {
//   readonly _id: string,
//   name: string,
//   email: string,
//   isActive: boolean,
//   credcardDetails?: number
// }

// let myUser: User = {
//   _id: "12345",
//   name: "Facundo",
//   email: "facundolunaok@gmail.com",
//   isActive: false
// }


type cardNumber = {
  cardnumber: string
}

type cardDate = {
  cardDate: string
}

// puedo "combinar" dos types
type cardDetails = cardNumber & cardDate & {
  cvv: number
}


// myUser.email = "gastonlunaok@gmail.com"
// myUser._id = "67890"

















export {}