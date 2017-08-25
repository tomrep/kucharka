let recepty = [
        {"id": 1, "name": "Vianočné oriešky", "category": "speci", "subcategory": "vianoce",
            "time": "-","image": "0005.jpg",
            "description": "Ak vám každý rok medovníky stvrdnú na kameň, tento recept je práve pre vás...",
            "ingredients": ["30dkg hladká múka", "30dkg hrubá múka", "30dkg smetol", "20dkg práškový cukor",
                "25dkg mleté orechy", "1 vajce"],
            "instructions":["PLNKA","4 vajcia", "20dkg práškový cukor","-šľahať nad parou",
                "20dkg masla = vyšľahaného","!VÝJDE 100ks orieškov!"]
        },
        {"id": 2, "name": "Pizza", "category": "slane", "subcategory": "-",
            "time": "90 minút","image": "0002.jpg",
            "description": "Ako z pravej talianskej reštaurácie.",
            "ingredients": ["260g hladkej múky", "260g polohrubej múky", "4pl olivového oleja",
                "2kl soli", "1kl cukru", "300ml vody", "42g droždia"],
            "instructions": ["Všetky suroviny zmiešame a necháme hodinu vykysnúť",
                "Pečieme pri teplote 230°C, teplovzdušný ohrev zo spodu, približne 10 minút"]},
        {"id": 3, "name": "Žltý syrek varený", "category": "speci", "subcategory": "noc",
             "time": "-","image": "0004.jpg",
             "description": "Bez tejto pochutiny nie je veľká noc veľkou nocou.",
             "ingredients": ["Vajcia", "Syr"],
             "instructions":["VSetko uvar vo vode", "Nechaj vychladnut"]},
        {"id": 4, "name": "Bôčikové rezne", "category": "hlavne", "subcategory": "brav",
            "time": "-","image":"0003.jpg",
            "description": "Rezne, ktoré zmiznú skôr ako stihnete povedať bôčik.",
            "ingredients":["Masko", "Struhanka", "Olej"],
            "instructions":["Masko pomliet a obalit v struhanke", "Oprazit na panvici alebo vo fritaku"]},
        {"id": 5, "name": "Zemiaková polievka", "category": "polievka", "subcategory": "-",
            "time": "-","image": "0001.jpg",
            "description": "Lahodná polievka plná chuti a zemiakov.",
            "ingredients":["Zemiaky", "olej", "múka"],
            "instructions":["Uvar zemiaky","Urob zaprazku","Zalej vodou","Pridaj zemiaky",
                "Dochut solou, korenim", "Podava sa so struhanym syrom"]}
]
$(document).ready(() => {
    let list = $('.food-items');
    recepty.forEach((recept) => {
        list.append(`<section class="food-card">
		<div class="panel-body">
		  <div class="photo">
			<img src="data/${recept.image}" alt="${recept.name}">
		  </div>
		  <table class="food-info">
			<tbody><tr>
			  <td>
				<h3><a href="#">${recept.name}</a></h3>
                <p class="time">
                    Čas prípravy: ${recept.time}
                    &emsp;
                    Náročnosť: ${recept.time}
                </p>
				<p class="description">${recept.description}</p>
			  </td>
			  <td>
				<a class="food-button" id="${recept.id}">Pozri recept</a>
			  </td>
			</tr>
		  </tbody></table>
		</div>
        </section>`);
        $(`#${recept.id}`).on('click', (event) => {
            event.preventDefault();
            window.scroll(0,0);
            load_food(recept.id);
        });
    }, this);
});

function filter (category, subcategory){
    let list = $('.food-items');
    let heading = "";
    switch(category){
        case 'polievka': 
            heading += 'Polievky';
            break;
        case 'hlavne':
            heading += 'Hlavné jedlá';
            switch(subcategory){
                case 'kur':
                    heading += " - Kuracie";
                    break;
                case 'brav':
                    heading += " - Bravčové";
                    break;
                case 'hov':
                    heading += " - Hovädzie a divina";
                    break;
            }
            break;
        case 'sladke':
            heading += 'Zákusky';
            switch(subcategory){
                case 'torta':
                    heading += " - Torty";
                    break;
                case 'kolac':
                    heading += " - Koláče";
                    break;
                case 'kusove':
                    heading += " - Kusové";
                    break;
            }        
            break;
        case 'slane':
        heading += 'Slané'
            break;
        case 'speci':
            heading += 'Špeciálne príležitosti';
            switch(subcategory){
                case 'noc':
                    heading += " - Veľká noc";
                    break;
                case 'vianoce':
                    heading += " - Vianoce";
                    break;
            }
            break;
    }
    list.html(`
        <h1>${heading}</h1>
        <div class="jumbotron food-detail"></div>
    `);
    recepty.forEach((recept) => {
        if(recept.category === category){
            if(!subcategory || recept.subcategory === subcategory){
                list.append(`
                <section class="food-card">
                    <div class="panel-body">
                        <div class="photo">
                        <img src="data/${recept.image}" alt="${recept.name}">
                        </div>
                        <table class="food-info">
                        <tbody><tr>
                        <td>
                        <h3><a href="#">${recept.name}</a></h3>
                        <p class="time">Čas prípravy: ${recept.time}</p>
                        <p class="description">${recept.description}</p>
                        </td>
                        <td>
                        <a class="food-button" id="${recept.id}">Pozri recept</a>
                        </td></tr>
                        </tbody></table>
                    </div>
                </section>`);
                $(`#${recept.id}`).on('click', (event) => {
                    window.scroll(0,0);
                    event.preventDefault();
                    load_food(recept.id);
                });
            }            
        }
    }, this);
}
function load_food(id){
    let r = recepty.find( x => x.id === id);
    let div = $('.food-detail');
    let inst = "";
    let ingr = "";
    let i;
    for(i  = 0; i < r.ingredients.length; i++){
        ingr += `<li>${r.ingredients[i]}</li>`;
    }
    for(i  = 0; i < r.instructions.length; i++){
        inst += `<li>${r.instructions[i]}</li>`;
    }
    div.empty();
    div.append(`
        <div class="exit-button">
            <a href="#">X</a>
        </div>
        <div class="food-name">
            <h2>${r.name}</h2>
        </div>       
        <div class="detail-photo">
            <img src="data/${r.image}" alt="${r.name}"/>
        </div>
        <p class="detail-description">${r.description}</p>
        <div class="detail-info">
            <p class="detail-time">Náročnosť: ${r.time}</p>
            <p class="detail-time">Čas prípravy: ${r.time}</p>
        </div>
        <table class="food-table">
        <tbody>
        <tr><td>
            <div class="food-ingr">
                <p>Ingrediencie</p>
                <ul>${ingr}</ul>
            </div>
        </td>
        <td>
            <div class="food-inst">
                <p>Postup</p>
                <ol>${inst}</ol>
            </div>
        </td></tr></tbody>
        </table>`);
    show_food(div);
}

function show_food(food) {
    $('.food-button').off('click');
    $('.exit-button').on('click', 'a', (event) => {
        event.preventDefault();
        hide_food(food);
    });
    food.removeClass("food-hidden");
    food.toggleClass("food-visible");
    $('.food-card').toggleClass("blur-back");
}

function hide_food(div) {
    div.addClass("food-hidden");
    div.toggleClass("food-visible");
    $('.food-card').toggleClass("blur-back");
    recepty.forEach( (recept) => {
        $(`#${recept.id}`).on('click', (event) => {
            event.preventDefault();
            window.scroll(0,0);
            load_food(recept.id);
        });
    }, this);
    $('.exit-button').off('click');
}