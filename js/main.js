import {
    //importationAlbum,
    importationAlbumTracks
} from "../components/fetchAlbum.js";
import {importationSearch} from "../components/fetchSearch.js";

class myframe extends HTMLElement{
    id
    constructor(id){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.shadowRoot.innerHTML = /*html*/`
            <iframe class="spotify-iframe" width="100%" height="99%" src="https://open.spotify.com/embed/album/${this.id}" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        `
    }
    static get observedAttributes(){
        return ["uri"];
    }
    attributeChangedCallback(name,old,now){
        let[nameUri, album, id] = now.split(":")
        this.id = id;
    }
}
customElements.define("my-frame",myframe)
importationAlbumTracks()