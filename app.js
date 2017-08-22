$(document).ready(function(){
    let recepty = [];
    $.getJSON('data/db.json', (data) => {
        let tmp;
        $.each(data, (key, value) => {
            tmp = value;
        });
        for(item of tmp){
            console.log(item);
        }
    });
});