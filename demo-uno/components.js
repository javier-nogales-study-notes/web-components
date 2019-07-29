class DemoUnoElement extends HTMLElement {
    constructor(){
        super();
        this.saludo = "Hello!!"
    }
    connectedCallback(){
        console.log("metido en la pagina");
        this.innerHTML = this.saludo;
    }
}
window.customElements.define("demo-uno", DemoUnoElement);