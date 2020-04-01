const scrollFunc =(evt:Event)=>{
    console.log("Scroll",evt)
}

/*注册事件*/
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel=scrollFunc;//IE/Opera/Chrome

class ScrollBox {

}

class ScrollContainer{

}

class ScrollTools{
    
}


