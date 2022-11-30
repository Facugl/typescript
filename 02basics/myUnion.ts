let score: number | string = 33
score = 44
score = "55"

type User = {
  name: string,
  id: number
}

type Admin = {
  username: string,
  id: number
}

let facundo: User | Admin = {
  name: "Facundo",
  id: 334
}

facundo = {
  username: "facundogl",
  id: 334
}


// function getDBId(id: number | string) {
//   // make some API calls
//   console.log(`DB id is: ${id}`);
// }
getDBId(5)
getDBId("5")

function getDBId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase()
  }
}


// array
const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: string[] | number[] = ["1", "2", "3"]
const data4: (string | number)[] = ["1", 2, "3"]

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew"