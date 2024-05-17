export class myframe extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        const uri = this.getAttribute("uri");
        if (uri){
            this.render(uri)
        }
    }
    render(uri){
        const id = uri.split(":").pop();
        this.shadowRoot.innerHTML = /*html*/`
            <iframe class="spotify-iframe" width="100%" height="100%" src="https://open.spotify.com/embed/album/${id}" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            `;  
    }

    static get observedAttributes(){
        return ["uri"];
    }
    attributeChangedCallback(name,old,now){
        if (name === "uri")
            this.render(now);
        // let[nameUri, album, id] = now.split(":")
        // this.id = id;
    }
}