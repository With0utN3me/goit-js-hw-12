import{a as I,S as R,i as d}from"./assets/vendor-2618a76b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function L(o){const t=o.hits.map(r=>`
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
        `).join("");p.classList.add("hidden"),u.insertAdjacentHTML("beforeend",t),h.refresh(),a.value="",l.classList.remove("hidden")}async function b(){return(await I.get(P+i.toString())).data}const a=document.querySelector("#search-input"),k=document.querySelector(".form"),u=document.querySelector(".image-list"),p=document.querySelector(".loader"),l=document.querySelector(".load-more-btn"),P="https://pixabay.com/api/?";let i={},n=0,v=15,g,S,w,y,q;function m(){return n+=1,new URLSearchParams({key:"42308406-6cac9d7b9797eefd79d1793c9",q:encodeURIComponent(w),page:n,per_page:v,image_type:"photo",orientation:"horizontal",safesearch:!0})}let h=new R(".image-list a",{captionsData:"alt",captionDelay:250});h.on("show.simplelightbox",function(){h.enableKeyboard});k.addEventListener("submit",o=>{if(o.preventDefault(),a.value.trim()==="")return d.error({message:"Input should't be blank!",position:"topRight"});n=0,w=a.value.trim(),p.classList.remove("hidden"),i=m(),b().then(t=>{if(Object.keys(t.hits).length!==0)u.innerHTML="",g=t.totalHits,L(t),i=m(),S=Math.floor(g/v),y=document.querySelector(".list-item"),q=y.getBoundingClientRect();else return l.classList.add("hidden"),p.classList.add("hidden"),u.innerHTML="",a.value="",d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(t=>console.log(t))});l.addEventListener("click",()=>{if(n>S)return l.classList.add("hidden"),d.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});b().then(o=>{L(o),i=m(),window.scrollBy({top:Math.floor(q.height*2),behavior:"smooth"})}).catch(o=>console.log(o))});
//# sourceMappingURL=commonHelpers.js.map
