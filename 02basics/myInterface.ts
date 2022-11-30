interface User {
  readonly dbId: number
  email: string,
  userId: number
  googleId?: string
  // startTrail: () => string
  startTrail(): string
  getCoupon(couponname: string, value: number): number
}

interface User {
  githubToken: string
}

interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const facundo: Admin = {
  dbId: 2211,
  role: "admin",
  githubToken: "github",
  email: "facundolunaok@gmail.com",
  userId: 2211,
  startTrail: () => {
    return "trail started"
  },
  getCoupon: (name: "facundo10", off: 10) => {
    return 10
  }
}

facundo.email = "gastonlunaok@gmail.com"
// facundo.dbId = 33






export {}