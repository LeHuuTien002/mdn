let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');

myButton.onclick = () => {
    setUserName();
}

if (!localStorage.getItem('name') == 'tien') {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}


function setUserName() {
    const myName = prompt('Please enter your name');
    console.log(!myName);
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}