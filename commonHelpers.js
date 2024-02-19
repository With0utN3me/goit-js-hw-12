import{a as b,S as v,i as m}from"./assets/vendor-2618a76b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&p(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function p(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(o){const s=o.hits.map(r=>`
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
        `).join("");console.log("Amogus"),c.classList.add("hidden"),l.insertAdjacentHTML("beforeend",s),u.refresh(),a.value="",y.classList.remove("hidden")}async function g(){return(await b.get(w+n.toString())).data}const a=document.querySelector("#search-input"),S=document.querySelector(".form"),l=document.querySelector(".image-list"),c=document.querySelector(".loader"),y=document.querySelector(".load-more-btn"),w="https://pixabay.com/api/?";let n={},f=0,L;function d(){return f+=1,new URLSearchParams({key:"42308406-6cac9d7b9797eefd79d1793c9",q:encodeURIComponent(L),page:f,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0})}let u=new v(".image-list a",{captionsData:"alt",captionDelay:250});u.on("show.simplelightbox",function(){u.enableKeyboard});S.addEventListener("submit",o=>{if(o.preventDefault(),a.value.trim()==="")return m.error({message:"Input should't be blank!",position:"topRight"});L=a.value.trim(),c.classList.remove("hidden"),n=d(),n=d(),g().then(s=>{if(Object.keys(s.hits).length!==0)l.innerHTML="",h(s);else return c.classList.add("hidden"),l.innerHTML="",a.value="",m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(s=>console.log(s))});y.addEventListener("click",()=>{n=d(),g().then(o=>{h(o)}).catch(o=>console.log(o))});
//# sourceMappingURL=commonHelpers.js.map
