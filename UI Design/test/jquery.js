$(document).ready(function(){
    $(".question").click(function(){
        try {
            $(".active")[0].className = 'question';
        } catch(err){}
        this.className = 'question active';

        console.log(this["value"]);
     })
})
