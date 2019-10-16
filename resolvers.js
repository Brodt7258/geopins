const user = {
  _id: "1",
  name: "esd",
  email: "sdfdf",
  picture: "sdfdfgdfgdfgd"
}

module.exports = {
  Query: {
    me: () => user
  }
}