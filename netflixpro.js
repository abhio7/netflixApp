// const user = ['abhishek'];

// const memberDiv = document.querySelector('.memberDiv');
// const addIcon = document.querySelector('.addIcon');

// const userIcon = () => {
//     user.map((curElem) => {
//         memberDiv.insertAdjacentHTML("afterbegin",
//             `<button class="btn"><span>${curElem}</span></button>`
//         );
//     })

// };


// addIcon.addEventListener('click', () => {
//     let userName = prompt('Please Enter Your Name');
//     console.log(userName);
//     if (userName !== null && !user.includes(userName)) {
//         user.push(userName);
//         memberDiv.insertAdjacentHTML("afterbegin",
//             `<button class="btn"><span>${userName}</span></button>`);
//     }
//     else {
//         alert("username alreaddy Exist !!!");
//     }

// })
// userIcon();

const member = ['abhishek'];
const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');
const userIcon = () => {
    member.map((curElem) => {
        memberDiv.insertAdjacentHTML("afterbegin", `<button class="btn"><span>${curElem}</span></button>`);
    });

}

addIcon.addEventListener('click', () => {
    let userName = prompt("Name Your Name");
    if (userName !== null && !member.includes(userName)) {
        member.shift(userName);
        memberDiv.insertAdjacentHTML("afterbegin", `<button class="btn"><span>${userName}</span></button>`);
    } else {
        alert("Username already exists");
    }
})
console.log(member);
userIcon();


