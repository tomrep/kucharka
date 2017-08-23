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
$(document).ready(function(){
    let list = $('.food-items');
    recepty.forEach(function(recept) {
        list.append(`<section class="food-card" id="${recept.id}">
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
				<a class="food-button">Pozri recept</a>
			  </td>
			</tr>
		  </tbody></table>
		</div>
	  </section>`);
    }, this);
    // $('.food-button').on('click', () => {
    //     let id = this;
    //     console.log(id);
    //     show_food(id)
    // }, this);
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
    // createState(0, heading, category, subcategory);
    list.html(`<h1>${heading}</h1>`);
    recepty.forEach(function(recept) {
        if(recept.category === category){
            if(!subcategory || recept.subcategory === subcategory){
                list.append(`<section class="food-card">
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
                        <a class="food-button">Pozri recept</a>
                      </td>
                    </tr>
                  </tbody></table>
                </div>
              </section>`);
            }            
        }
    });
}
function show_food(id){
    let r = recepty.find( x => x.id === id);

}

function createState(id, title, cat, subcat){
    let state = {};
    subcat = subcat || "";
    let path = "/" + cat + "/" + subcat;
    console.log(path);
    history.pushState(state, title, path);
}
