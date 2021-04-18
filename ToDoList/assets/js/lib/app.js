$('ul').on('click', 'li', function(){
    
    $(this).toggleClass('contained');
})


// Add new element
$('input[type="text"]').keypress(function(e){
    if (e.which==13){
        const todoText = $(this).val();
        $('ul').append(`<li><span><i class="fas fa-trash"></i> </span>${todoText}</li>`);
        $(this).val("");
    }
})