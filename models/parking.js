/**
 * Arquivo: parking.js
 * Author: Michel Ferreira Souza
 * Description: Arquivo onde trataremos o modelo do projeto.
 * Definição dos esquemas para serem utilizadas na Base de Dados (MongoDb)
 * Data: 23/12/2016
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var ParkingSchema = new Schema({
    name: { type: String, required: true },
    priceHour: { type: Currency, required: true },
    amountSpotParking: {type: Number},
    area: { type: { type: String, "enum": [
            "Point",
            "MultiPoint",
            "LineString",
            "MultiLineString",
            "Polygon",
            "MultiPolygon"
        ]
     },
    coordinates: { type: []}
  }
});

// ParkingSchema.index({area: '2dsphere'});

module.exports = mongoose.model('Parking', ParkingSchema);
