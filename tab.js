let tabButton = $(".tab-button");


function openTap(count){
    tabButton.removeClass("orange");
    tabButton.eq(count).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(count).addClass("show");
}

$(".list").on("click",function(e){    
    console.log(e.target.dataset.tab);
    openTap(e.target.dataset.tab);    
});


/*
$('#login').on('click',function(){
    $('.black-bg').addClass('show-modal');
})


let testTarget = document.querySelector(".black-bg");
document.querySelector(".black-bg").addEventListener('click',function(e){    
    console.log(e.target);
    console.log(testTarget);
    if (e.target == document.querySelector(".black-bg")) {
        
        document.querySelector(".black-bg").classList.remove('show-modal');
    }
})
*/
