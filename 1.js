const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");

d.addEventListener('click', function (event) {
    let a1 = a.value;
    let b1 = b.value;
    let c1 = c.value;
    let d1;

    d1 = b1*b1 - 4*a1*c1;
    alert(d1);

    if (d1 > 0) {
        let x1 = (-b1 + Math.sqrt(d1))/ (2*a1);
        let x2 = (-b1 - Math.sqrt(d1))/ (2*a1);
        alert(x1);
        alert(x2);
    }

    if (d1 == 0) {
        let x1 = (-b1 + Math.sqrt(d1))/ (2*a1);
        alert(x1);

    }

    if (d1 < 0) alert("Корней нет")




    }
);


// const btn = document.querySelector('.res-btn');
// const input = document.querySelector ('.txt-input');
//
// btn.addEventListener('click', function (event) {
//
//         let c = input.value;
//         alert(c);
//
//     }
// );