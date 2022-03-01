import "./css.css";
// import "@babel/polyfill";

const promiseArr = [new Promise(() => {}), new Promise(() => {})];

promiseArr.map(propmise => console.log(propmise));

const add = (x, y) => x + y;
console.log(add(1, 2));

const item = {
  name: "lee",
};

const temp = [1, 2, 3, 4];
console.log(temp.includes(1));
console.log(item?.name);
