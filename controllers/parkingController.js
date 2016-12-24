const parkingController = (Parking) => {


const get = (req, res) => {

var coords = [];
coords[0] = parseFloat(req.query.latitude) || 0;
coords[1] = parseFloat(req.query.longitude) || 0;
console.log(coords);
var query = [
 {
   $geoNear: {
      near: coords,
      distanceField: "dist.calculated",
      spherical: true,
    //   distanceMultiplier: 3963.2,
      includeLocs: "dist.location"
   }
 }
];

    //Função para Selecionar Todos os 'usuarios' e verificar se há algum erro:
    Parking.aggregate(query).exec().then( data => {

    //   let result = data.map(function(data){
    //     return {
    //       name: data.name,
    //       priceMinute: data.price/60,
    //       distanceInMetro: data.dist.calculated
    //     }
    //   });

      res.status(200).json(data);
    })
    .catch( err => console.log(err))
}

const post = (req, res) => {
    let teste = {};
    teste.name = req.body.name;
    teste.priceHour = req.body.priceHour;
    teste.amountSpotParking = req.body.priceHour;

    Parking.create(req.body).then( parking => {
        res.status(201);
        res.send(parking);
    }).catch((error) => res.send(error))
}

    return {
        get: get,
        post: post
    }
}

module.exports = parkingController
