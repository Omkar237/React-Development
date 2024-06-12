

function customRender(reactElemnt, mainContainer){
    const domElement = document.createElement(reactElemnt.type)
    domElement.innerHTML = reactElemnt.childrem
    domElement.setAttribute('href', reactElemnt.props.href)
    domElement.setAttribute('target', reactElemnt.props.target)
    mainContainer.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '__blank'
    },
    childrem: 'Click me to visit google'
}



const mainContainer = document.querySelector("#root")
customRender(reactElement, mainContainer)