$(document).ready(function(){
    let recepty = [];
    $.ajax({
        type: 'GET',
        url: 'data/db.json',
        dataType: 'json',
        async: false,
        success: (data) => {
            let tmp;
            $.each(data, (key, value) => {
                tmp = value;
            });
            for(item of tmp){
                console.log(item);
            }
        }
    });
});