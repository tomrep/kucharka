let recepty = [
        {"id": 1, "name": "Vianočné oriešky", "category": "speci", "subcategory": "vianocne",
            "time": "-","image": "data/0005.jpg",
            "description": "Ak vám každý rok medovníky stvrdnú na kameň, tento recept je práve pre vás...",
            "ingredients": ["30dkg hladká múka", "30dkg hrubá múka", "30dkg smetol", "20dkg práškový cukor",
                "25dkg mleté orechy", "1 vajce"],
            "instructions":["PLNKA","4 vajcia", "20dkg práškový cukor","-šľahať nad parou",
                "20dkg masla = vyšľahaného","!VÝJDE 100ks orieškov!"]
        },
        {"id": 2, "name": "Pizza", "category": "slane", "subcategory": "jedlo",
            "time": "90 minút","image": "data/0002.jpg",
            "description": "Ako z pravej talianskej reštaurácie.",
            "ingredients": ["260g hladkej múky", "260g polohrubej múky", "4pl olivového oleja",
                "2kl soli", "1kl cukru", "300ml vody", "42g droždia"],
            "instructions": ["Všetky suroviny zmiešame a necháme hodinu vykysnúť",
                "Pečieme pri teplote 230°C, teplovzdušný ohrev zo spodu, približne 10 minút"]},
        {"id": 3, "name": "Žltý syrek varený", "category": "speci", "subcategory": "velkonocne",
             "time": "-","image": "data/0004.jpg",
             "description": "Bez tejto pochutiny nie je veľká noc veľkou nocou.",
             "ingredients": ["Vajcia", "Syr"],
             "instructions":["VSetko uvar vo vode", "Nechaj vychladnut"]},
        {"id": 4, "name": "Bôčikové rezne", "category": "hlavne", "subcategory": "bravcove",
            "time": "-","image":"data/0003.jpg",
            "description": "Rezne, ktoré zmiznú skôr ako stihnete povedať bôčik.",
            "ingredients":["Masko", "Struhanka", "Olej"],
            "instructions":["Masko pomliet a obalit v struhanke", "Oprazit na panvici alebo vo fritaku"]},
        {"id": 5, "name": "Zemiaková polievka", "category": "polievka", "subcategory": "-",
            "time": "-","image": "data/0001.jpg",
            "description": "Lahodná polievka plná chuti a zemiakov.",
            "ingredients":["Zemiaky", "olej", "múka"],
            "instructions":["Uvar zemiaky","Urob zaprazku","Zalej vodou","Pridaj zemiaky",
                "Dochut solou, korenim", "Podava sa so struhanym syrom"]}
]
$(document).ready(function(){
    let list = $('.food-items');
    recepty.forEach(function(recept) {
        list.append(`<section class="food-card">
		<div class="panel-body">
		  <div class="photo">
			<img src="${recept.image}" alt="${recept.name}">
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
});