// if ("serviceWorker" in navigator) {
//   console.log("serviceWorker in");
// }

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("./sw.js");
}
