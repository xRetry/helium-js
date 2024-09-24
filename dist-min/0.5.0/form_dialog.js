import"./button.js";import"./input.js";import"./dialog.js";import"./select.js";import"./utils-DMShwPAW.js";const sheet=new CSSStyleSheet;sheet.replaceSync("#he-form {\r\n    display: grid;\r\n    grid-template-columns: max-content 1fr;\r\n    gap: 0.5rem;\r\n    margin: 0.5rem;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#footer-diag-edit he-button:first-child {\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n#he-form he-select, #he-form he-input {\r\n    width: 100%;\r\n}\r\n\r\n#he-form label {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n");class HeliumFormDialog extends HTMLElement{static observedAttributes=["open","he-title","close-icon"];dialog;constructor(){super();let e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=[sheet],this.dialog=document.createElement("he-dialog"),this.form=document.createElement("form"),this.form.id="he-form",this.form.slot="body",this.dialog.append(this.form);let t=document.createElement("div");t.id="footer-diag-edit",t.slot="footer",this.dialog.append(t);let r=document.createElement("he-button");r.innerHTML="Speichern",r.id="btn-save",r.onclick=()=>this.submit.bind(this)(),t.append(r),e.append(this.dialog)}connectedCallback(){this.addEventListener("he-dialog-show",(function(){this.show()})),this.addEventListener("he-dialog-close",(function(){this.close()}))}getValues(e=!0){let t={};for(const e of this.body.querySelectorAll("input, select"))this._formInputBlurCallback({currentTarget:e})&&(t[e.name]=e.value);return t}submit(endpoint,fetchArgs,callbackBefore,callbackAfter){let values={};for(const e of this.form.querySelectorAll("input, select")){if(!this._formInputBlurCallback({currentTarget:e}))return;values[e.name]=e.value}endpoint=endpoint??this.getAttribute("endpoint")??this.getAttribute("action"),fetchArgs=fetchArgs??{},fetchArgs.method=fetchArgs.method??this.getAttribute("method")??"POST",fetchArgs.headers=fetchArgs.headers??this.getAttribute("headers"),fetchArgs.body=JSON.stringify(values),callbackBefore=callbackBefore??this.getAttribute("before-submit"),callbackBefore&&(fetchArgs=eval(callbackBefore+"(fetchArgs)")),callbackAfter=callbackAfter??this.getAttribute("after-submit"),this.dialog.querySelector("#btn-save").loading(),fetch(endpoint,fetchArgs).then((resp=>{this.dialog.querySelector("#btn-save").loading(!1),callbackAfter&&eval(callbackAfter+"(resp)");const event=new CustomEvent("he-form-dialog-submit",{detail:{source:this.id,data:resp}});this.dispatchEvent(event)}))}_validateInput(e){return e.checkValidity()}reset(){this.form.reset()}setValues(e){for(const[t,r]of Object.entries(e)){const e=this.form.querySelector(`[name="${t}"]`);e&&(e.value=r)}return this}renderRows(e){this.form.innerHTML="",e.forEach(((e,t)=>{let r=e.label;e.required&&(r+="*");let i=`edit-${t}`,n=document.createElement("label");if(n.for=i,n.innerHTML=r,this.form.append(n),e.options&&Object.keys(e.options).length>0){let t=document.createElement("he-select");if(t.id=i,t.name=e.name,!e.required){let e=document.createElement("option");e.innerHTML="‎",t.append(e)}for(const[r,i]of Object.entries(e.options)){const e=document.createElement("option");e.value=r,e.innerHTML=i,t.append(e)}this.form.append(t)}else{let t=document.createElement("he-input");t.required=e.required,t.id=i,t.name=e.name,t.type="text",t.onblur=e=>this._formInputBlurCallback.bind(this)(e),e.pattern&&(t.pattern=e.pattern),null!=e.placeholder&&(t.placeholder=e.placeholder),this.form.append(t)}}))}_formInputBlurCallback(e){const t=e.currentTarget,r=this._validateInput(t);return r?t.removeAttribute("invalid"):t.setAttribute("invalid",!0),r}attributeChangedCallback(e,t,r){this.dialog.attributeChangedCallback(e,t,r)}show(e=!1){return e&&this.reset(),this.dialog.show(empty),this}showModal(){return this.dialog.showModal(),this}close(){return this.dialog.close(),this}}customElements.define("he-form-dialog",HeliumFormDialog);export{HeliumFormDialog};
