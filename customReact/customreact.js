function customRender(reactElement, container) {

    //not good code 
    /*const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement);
    */

    //more optimized code
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);


}



const mainContainer = document.querySelector('#root');

const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: '_blank'
    },
    children: 'Click me to visit google.'
}


customRender(reactElement, mainContainer)