import faker from "faker";

const mount = (el) => {
  let cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  if (el) {
    //running standalone without container
    mount(el);
  }
}
//export for container so it can provide element to render into
export { mount };
