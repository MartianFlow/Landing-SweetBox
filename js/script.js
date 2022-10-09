const items = document.querySelectorAll('.container-faq__box button');

function toggleList(){
    const itemList = this.getAttribute('aria-expanded');

    for(i = 0;i<items.length;i++){
        items[i].setAttribute('aria-expanded', 'false');
    }

    if(itemList =='false'){
        this.setAttribute('aria-expanded','true');
    }
}

items.forEach((item)=> item.addEventListener('click',toggleList));