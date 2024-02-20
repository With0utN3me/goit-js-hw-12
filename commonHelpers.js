import{a as I,S as R,i as h}from"./assets/vendor-2618a76b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))b(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&b(u)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function b(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function p(t){const s=t.hits.map(r=>`
            <li class="list-item">
            <a class="gallery-link" href="${r.largeImageURL}">
            <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
            </a>
            <ul class="stats-list">
                <li class="stats-list-item">
                    <p class="stats">Likes</p>
                    <p class="stats-info">${r.likes}</p>
                </li>
                <li class="stats-list-item">
                    <p class="stats">Views</p>
                    <p class="stats-info">${r.views}</p>
                </li>
                <li class="stats-list-item">
                    <p class="stats">Comments</p>
                    <p class="stats-info">${r.comments}</p>
                </li>
                <li class="stats-list-item">
                    <p class="stats">Downloads</p>
                    <p class="stats-info">${r.downloads}</p>
                </li>
            </ul>
            </li>
        `).join("");a.classList.add("hidden"),f.insertAdjacentHTML("beforeend",s),L.refresh(),l.value=""}async function m(){return(await I.get(M+i.toString())).data}const l=document.querySelector("#search-input"),k=document.querySelector(".form"),f=document.querySelector(".image-list"),a=document.querySelector(".loader"),n=document.querySelector(".load-more-btn"),M="https://pixabay.com/api/?";let i={},c=0,S=15,v,g,q,w,y;function d(){return c+=1,new URLSearchParams({key:"42308406-6cac9d7b9797eefd79d1793c9",q:encodeURIComponent(q),page:c,per_page:S,image_type:"photo",orientation:"horizontal",safesearch:!0})}let L=new R(".image-list a",{captionsData:"alt",captionDelay:250});L.on("show.simplelightbox",function(){L.enableKeyboard});k.addEventListener("submit",t=>{if(t.preventDefault(),n.classList.add("hidden"),l.value.trim()==="")return h.error({message:"Input should't be blank!",position:"topRight"});c=0,q=l.value.trim(),a.classList.remove("hidden"),i=d(),m().then(s=>{if(Object.keys(s.hits).length!==0)f.innerHTML="",v=s.totalHits,p(s),i=d(),g=Math.floor(v/S),g>1&&n.classList.remove("hidden"),w=document.querySelector(".list-item"),y=w.getBoundingClientRect();else return a.classList.add("hidden"),f.innerHTML="",l.value="",h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(s=>console.log(s))});n.addEventListener("click",()=>{c==g?(a.classList.remove("hidden"),m().then(t=>(p(t),i=d(),window.scrollBy({top:Math.floor(y.height*2),behavior:"smooth"}),n.classList.add("hidden"),h.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))).catch(t=>console.log(t))):(a.classList.remove("hidden"),m().then(t=>{p(t),i=d(),window.scrollBy({top:Math.floor(y.height*2),behavior:"smooth"})}).catch(t=>console.log(t)))});
//# sourceMappingURL=commonHelpers.js.map
