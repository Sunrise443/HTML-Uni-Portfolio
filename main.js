var body = document.querySelector('body')

const OpenListBtn = document.querySelector(".Labs-Btn");
const OpenList = document.querySelector(".Labs-List");
OpenList.style.display = 'none'
function toggleVisibility() {
    if (OpenList.style.display === 'none') {
        OpenList.style.display = 'block';
    } else {
        OpenList.style.display = 'none';
    }
}
OpenListBtn.addEventListener("click", toggleVisibility);



const OpenBtn = document.querySelector(".Equa");
const Open = document.querySelector(".EquaPic");
Open.style.display = 'none'
function toggleVisibility0() {
    if (Open.style.display === 'none') {
        Open.style.display = 'block';
    } else {
        Open.style.display = 'none';
    }
}
OpenBtn.addEventListener("click", toggleVisibility0);



const OpenBtn1 = document.querySelector(".API");
const Open1 = document.querySelector(".APIPic");
Open1.style.display = 'none'
function toggleVisibility1() {
    if (Open1.style.display === 'none') {
        Open1.style.display = 'block';
    } else {
        Open1.style.display = 'none';
    }
}
OpenBtn1.addEventListener("click", toggleVisibility1);



const OpenBtn2 = document.querySelector(".Web");
const Open2 = document.querySelector(".WebPic");
Open2.style.display = 'none'
function toggleVisibility2() {
    if (Open2.style.display === 'none') {
        Open2.style.display = 'block';
    } else {
        Open2.style.display = 'none';
    }
}
OpenBtn2.addEventListener("click", toggleVisibility2);



const OpenBtn3 = document.querySelector(".Mus");
const Open3 = document.querySelector(".MusPic");
Open3.style.display = 'none'
function toggleVisibility3() {
    if (Open3.style.display === 'none') {
        Open3.style.display = 'block';
    } else {
        Open3.style.display = 'none';
    }
}
OpenBtn3.addEventListener("click", toggleVisibility3);


// const heading = document.getElementById('hello')
// const heading2 = document.querySelector('h2')
// const heading3 = heading2.nextElementSibling

// heading3.style.color = 'blue'

// setTimeout(() => {
//     addStylesTo(heading, 'Your turn')
// }, 1000); 

// setTimeout(() => {
//     addStylesTo(heading2, "has")
// }, 2000);

// const link = heading3.querySelector('a')
// link.addEventListener

// setTimeout(() => {
//     addStylesTo(heading3.children[0], "come")
// }, 3000);

// function addStylesTo(node, text) {
//     node.textContent = text
//     node.style.color = 'red'
//     node.style.background = 'blue'
//     node.style.display = 'block'
//     node.style.width = '100%'
// }

// // -------------------------------------------------------

// heading.onclick = () => {
//     if (heading.style.color === 'red') {
//         heading.style.background = 'red'
//         heading.style.color = 'blue'
//     } else {
//         heading.style.background = 'blue'
//         heading.style.color = 'red'
//     }
// }

