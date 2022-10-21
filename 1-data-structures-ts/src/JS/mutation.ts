function callback(mutation: any) {
  console.log(mutation);
}

const app = document.querySelector("#app");
const observer = new MutationObserver(callback);

observer.observe(app as Element, {
  childList: true,
  attributes: true,
  subtree: true,
});

// observer.disconnect()
