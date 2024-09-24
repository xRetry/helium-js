import{h as t,a as e,b as o,c as r}from"./utils-DMShwPAW.js";const i=new CSSStyleSheet;i.replaceSync(':host {\r\n    height: fit-content;\r\n    width: fit-content;\r\n    font-size: 14px;\r\n    min-width: 60px;\r\n}\r\n\r\n#inp {\r\n    position: relative;\r\n    background-color: var(--he-select-clr-bg, whitesmoke);\r\n    border: 1px solid lightgrey;\r\n    width: inherit;\r\n    height: inherit;\r\n    min-width: inherit;\r\n    padding: 0.3rem 0.4rem;\r\n    border-radius: 3px;\r\n    outline: none;\r\n    text-align: left;\r\n    padding-right: 25px;\r\n    text-wrap: nowrap;\r\n}\r\n\r\n#inp:hover, #inp:focus {\r\n    cursor: pointer;\r\n    border-color: var(--he-select-clr-border-hover, grey);\r\n}\r\n\r\n#inp::after {\r\n    content: "";\r\n    position: absolute;\r\n    width: 4px;\r\n    height: 4px;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto 10px auto auto;\r\n    border: 2px solid transparent;\r\n    border-bottom-color: var(--he-select-clr-arrow, black);\r\n    border-right-color: var(--he-select-clr-arrow, black);\r\n    transform: rotate(45deg) translateY(-2.5px);\r\n}\r\n\r\n#popover {\r\n    inset: unset;\r\n    outline: none;\r\n    border: 1px solid grey;\r\n    border-radius: var(--he-select-border-radius, 3px);\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#cont-options {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: var(--he-select-clr-bg, white);\r\n    max-height: 300px;\r\n    overflow: auto;\r\n    overscroll-behavior: contain;\r\n}\r\n\r\n#cont-options option {\r\n    padding: 5px 4px;\r\n    border-radius: 3px;\r\n}\r\n\r\n#cont-options option[selected] {\r\n    background-color: var(--he-select-clr-bg-hover, whitesmoke);\r\n}\r\n\r\n#cont-options option:hover:not(:disabled) {\r\n    background-color: var(--he-select-clr-bg-hover, whitesmoke);\r\n    cursor: pointer;\r\n}\r\n\r\n#filter {\r\n    --he-input-border-radius: 2px;\r\n    width: 100%;\r\n}\r\n\r\n');class n extends HTMLElement{static formAssociated=!0;static observedAttributes=["open","search"];popover;filter;options;internals;_filterTimeout=0;_disableAttrCallback=!1;constructor(){super();let t=this.attachShadow({mode:"open"});this.internals=this.attachInternals(),this.input=document.createElement("button"),this.input.id="inp",this.input.setAttribute("popovertarget","popover"),this.filter=document.createElement("he-input"),this.filter.id="filter",this.filter.style.display="none",this.filter.onkeyup=()=>this.changedFilterCallback.bind(this)(),this.popover=document.createElement("div"),this.popover.id="popover",this.popover.popover="",this.popover.append(this.filter),this.popover.addEventListener("beforetoggle",(t=>this.beforetoggledPopoverCallback.bind(this)(t))),this.popover.addEventListener("toggle",(t=>this.toggledPopoverCallback.bind(this)(t))),t.append(this.popover),t.append(this.input),t.adoptedStyleSheets=[i]}connectedCallback(){if(null==this.id||""===this.id)throw new Error("This elements needs an ID!");this.popover.setAttribute("attach","#"+this.id),this.options=document.createElement("div"),this.options.id="cont-options",this.options.slot="content";for(const t of this.querySelectorAll("option"))t.onclick=t=>this.clickedOptionCallback.bind(this)(t),this.options.append(t);this.input.innerHTML="‎",this.popover.append(this.options),this.select(0)}changedFilterCallback(){window.clearTimeout(this._filterTimeout),this._filterTimeout=setTimeout((()=>{const t=this.filter.value.toLowerCase();for(const e of this.options.children)0===t.length||""!==e.value&&e.innerText.toLowerCase().includes(t)?e.style.display="":e.style.display="none"}),500)}beforetoggledPopoverCallback(e){this._disableAttrCallback=!0,"open"===e.newState?(this.setAttribute("open",""),this.popover.style.visibility="hidden"):(t(),this.removeAttribute("open")),this._disableAttrCallback=!1}toggledPopoverCallback(t){if("open"===t.newState){let t="bottom-right";e(this)<this.popover.offsetHeight+20&&(t="top-right");const i=this.getAttribute("position")??t;o(this.popover,this.input,i,6),this.popover.style.width=this.input.offsetWidth-7+"px",r(),this.popover.style.visibility="",this.filter.focus()}else{this.filter.value="";for(const t of this.options.children)t.style.display=""}}select(t){const e=this.options.children[t];console.assert(null!=e,"No option with the given index!"),this._select(e)}_select(t){this.input.innerHTML=t.innerHTML,this.value=t.value,null!=this.selection&&this.selection.removeAttribute("selected"),this.selection=t,this.selection.setAttribute("selected",""),this.internals.setFormValue(this.value)}open(){this.popover.showPopover()}close(){this.popover.hidePopover()}toggle(){this.popover.togglePopover()}clickedOptionCallback(t){this.popover.hidePopover();const e=t.currentTarget;this._select(e)}attributeChangedCallback(t,e,o){if(!this._disableAttrCallback)switch(t){case"open":null==o||"false"===o?this.popover.hidePopover():this.popover.showPopover();break;case"filter":this.filter.style.display=null==o||"false"===o?"none":""}}}document.addEventListener("DOMContentLoaded",(function(){customElements.define("he-select",n)}));export{n as HeliumSelect};
