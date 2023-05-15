var container = document.createElement("div");
container.id = "main"
container.className = "container"

var row = document.createElement("div");
row.className = "row"


container.appendChild(row)
document.body.append(container)
async function pokemon(){
    try {
        var demo = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`)
        var res = await demo.json()
        var out = res.results
        console.log(out)
        for(var i of out){
            // console.log(i)
            var demo1 = await fetch(`${i.url}`)
        var res1 = await demo1.json()
        var urll = res1.forms[0].url
        console.log(res1)

            var step1 = await fetch(`${urll}`) ;
            var step2 = await step1.json();
            var image = step2.sprites.front_default;

            // console.log(step3)
    

        // console.log(res1)
        row.innerHTML +=`
        <div class="col-md-4">
        <div class="card border-primary mb-3 rounded" style="width: 20rem;">
        <h5 class="card-title mt-3">Name : ${i.name}</h5>
        <img src="${image}" class="card-img-top" alt="...">

        <div class="card-body">
            <h6>Ability : ${res1.abilities[0].ability.name}</h5>
            <h6>Height : ${res1.height}</h5>
            <h6>Weight : ${res1.weight}</h5>
            <h6 class="moves">Moves :${dummy} </h5>
        </div>
        </div>
        </div>`

        
            var dummy = "";
      // console.log(res1.abilities[1].ability.name)
            var moves = res1.moves
            for(var j of moves){
                // console.log()
            dummy += " ," + j.move.name
                // console.log(dummy)
            }
            


        }
        
    } catch (error) {
        console.log(error);
    }
}
pokemon()

// var dummy = fetch(`https://pokeapi.co/api/v2/pokemon-form/1/`)
// .then((data)=>data.json()).then((dat)=>console.log(dat)).catch((err)=>console.log(err))
