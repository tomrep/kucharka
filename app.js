$(document).ready(function(){
    let recepty = [];
    $.getJSON('data/db.json', (data) => {
        let tmp;
        $.each(data, (key, value) => {
            tmp = value;
        });
        console.log('Tomas je tu');
        for(item of tmp){
            console.log('Tomas je tu hehehe');
            console.log(item);
        }
    });
});