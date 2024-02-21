import{a as q,S as I,i as a}from"./assets/vendor-2618a76b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))g(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&g(u)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function g(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function b(o){const t=o.hits.map(r=>`
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
        `).join("");i.classList.add("hidden"),p.insertAdjacentHTML("beforeend",t),f.refresh(),n.value=""}async function v(){return(await q.get(P+c.toString())).data}const n=document.querySelector("#search-input"),k=document.querySelector(".form"),p=document.querySelector(".image-list"),i=document.querySelector(".loader"),l=document.querySelector(".load-more-btn"),P="https://pixabay.com/api/?";let c={},d=0,S=15,y,m,w,L,R;function h(){return d+=1,new URLSearchParams({key:"42308406-6cac9d7b9797eefd79d1793c9",q:encodeURIComponent(w),page:d,per_page:S,image_type:"photo",orientation:"horizontal",safesearch:!0})}let f=new I(".image-list a",{captionsData:"alt",captionDelay:250});f.on("show.simplelightbox",function(){f.enableKeyboard});k.addEventListener("submit",o=>{if(o.preventDefault(),l.classList.add("hidden"),n.value.trim()==="")return a.error({message:"Input should't be blank!",position:"topRight"});d=0,w=n.value.trim(),i.classList.remove("hidden"),c=h(),v().then(t=>{if(Object.keys(t.hits).length!==0)p.innerHTML="",y=t.totalHits,b(t),c=h(),m=Math.floor(y/S),m>1&&l.classList.remove("hidden"),L=document.querySelector(".list-item"),R=L.getBoundingClientRect();else return i.classList.add("hidden"),p.innerHTML="",n.value="",a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(t=>a.error({message:t.message,position:"topRight"}))});l.addEventListener("click",()=>{i.classList.remove("hidden"),v().then(o=>{d==m&&(l.classList.add("hidden"),a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),b(o),c=h(),window.scrollBy({top:Math.floor(R.height*2),behavior:"smooth"})}).catch(o=>(i.classList.add("hidden"),a.error({message:o.message,position:"topRight"})))});
//# sourceMappingURL=commonHelpers.js.map
