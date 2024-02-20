import{a as I,S as R,i as u}from"./assets/vendor-2618a76b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))L(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&L(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function L(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function h(t){const s=t.hits.map(r=>`
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
        `).join("");f.classList.add("hidden"),m.insertAdjacentHTML("beforeend",s),y.refresh(),l.value="",i.classList.remove("hidden")}async function p(){return(await I.get(M+a.toString())).data}const l=document.querySelector("#search-input"),k=document.querySelector(".form"),m=document.querySelector(".image-list"),f=document.querySelector(".loader"),i=document.querySelector(".load-more-btn"),M="https://pixabay.com/api/?";let a={},n=0,w=15,b,S,q,v,g;function c(){return n+=1,new URLSearchParams({key:"42308406-6cac9d7b9797eefd79d1793c9",q:encodeURIComponent(q),page:n,per_page:w,image_type:"photo",orientation:"horizontal",safesearch:!0})}let y=new R(".image-list a",{captionsData:"alt",captionDelay:250});y.on("show.simplelightbox",function(){y.enableKeyboard});k.addEventListener("submit",t=>{if(t.preventDefault(),l.value.trim()==="")return u.error({message:"Input should't be blank!",position:"topRight"});n=0,q=l.value.trim(),f.classList.remove("hidden"),a=c(),p().then(s=>{if(Object.keys(s.hits).length!==0)m.innerHTML="",b=s.totalHits,h(s),a=c(),S=Math.floor(b/w),v=document.querySelector(".list-item"),g=v.getBoundingClientRect();else return i.classList.add("hidden"),f.classList.add("hidden"),m.innerHTML="",l.value="",u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(s=>console.log(s))});i.addEventListener("click",()=>{n==S?p().then(t=>(h(t),a=c(),window.scrollBy({top:Math.floor(g.height*2),behavior:"smooth"}),i.classList.add("hidden"),u.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))).catch(t=>console.log(t)):p().then(t=>{h(t),a=c(),window.scrollBy({top:Math.floor(g.height*2),behavior:"smooth"})}).catch(t=>console.log(t))});
//# sourceMappingURL=commonHelpers.js.map
