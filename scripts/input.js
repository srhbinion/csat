$(document).ready(function(){
    $('input[type="checkbox"]').each(function(){
        if(this.checked) $(this).next().addClass("Checked");
    });
});