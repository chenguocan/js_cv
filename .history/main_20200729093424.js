let demo = document.querySelector("#demo");
let n = 1;
demo.innerHTML = n;
let step = () => {
  setTimeout(() => {
    n = n + 1;
    demo.innerHTML = n;
  }, 1000);
};
step();
