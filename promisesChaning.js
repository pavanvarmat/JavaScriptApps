//promises chaining
const ticketBooking = () => {
  return new Promise((resolve, reject) => {
    resolve("Ticket Booked-->");
  });
};
const popcorn = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "Get Popcorn-->");
  });
};
const coke = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "Get Coke");
  });
};
ticketBooking()
  .then((result) => {
    return popcorn(result);
  })
  .then((result) => {
    return coke(result);
  })
  .then((result) => {
    console.log(" Wanna to go Movie-->" + result);
  })
  .catch((error) => {
    console.log("error", error);
  });
