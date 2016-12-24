/*
para consultar esses pontos criados, você encontra nesse site abaixo:

http://geojson.io/#id=gist:anonymous/b80260a53d99d8c8fa73e89ff437f7cb&map=19/-26.91583/-48.66392

para criar o indexes na coleção:
db.parkings.createIndex({area: "2dsphere"});
*/
/*
{ type: { type: String, "enum": [
        "Point",
        "MultiPoint",
        "LineString",
        "MultiLineString",
        "Polygon",
        "MultiPolygon"
    ]
 }

*/
//exemplo para inserir dados na coleção parking.
{
  "name": "univali",
  "priceHour": 15,
  "amountSpotParking": 100,
  "area": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -48.66589307785033,
              -26.917387223887733
            ],
            [
              -48.66589307785033,
              -26.916894549297925
            ],
            [
              -48.665217161178575,
              -26.916894549297925
            ],
            [
              -48.665217161178575,
              -26.917387223887733
            ],
            [
              -48.66589307785033,
              -26.917387223887733
            ]
          ]
        ]
      }
}
------------------------
{
  "name": "angeloni",
  "priceHour": 20,
  "amountSpotParking": 150,
  "area": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -48.66724491119385,
              -26.91101098751604
            ],
            [
              -48.66724491119385,
              -26.910102117292944
            ],
            [
              -48.66642951965332,
              -26.910102117292944
            ],
            [
              -48.66642951965332,
              -26.91101098751604
            ],
            [
              -48.66724491119385,
              -26.91101098751604
            ]
          ]
        ]
      }
}
------------------------
{
  "name": "Fort Atacadista",
  "priceHour": 10,
  "amountSpotParking": 200,
  "area": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -48.66366147994995,
              -26.905069713954934
            ],
            [
              -48.66366147994995,
              -26.904395201783796
            ],
            [
              -48.6628782749176,
              -26.904395201783796
            ],
            [
              -48.6628782749176,
              -26.905069713954934
            ],
            [
              -48.66366147994995,
              -26.905069713954934
            ]
          ]
        ]
      }
}
------------------------
{
  "name": "Centreventos Itajaí",
  "priceHour": 25,
  "amountSpotParking": 5000,
  "area": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -48.65349590778351,
              -26.91003514761863
            ],
            [
              -48.65349590778351,
              -26.909279344254173
            ],
            [
              -48.6522513628006,
              -26.909279344254173
            ],
            [
              -48.6522513628006,
              -26.91003514761863
            ],
            [
              -48.65349590778351,
              -26.91003514761863
            ]
          ]
        ]
      }
}
------------------------
{
  "name": "Estadio Hercilio Luz",
  "priceHour": 30,
  "amountSpotParking": 1000,
  "area": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -48.660314083099365,
              -26.908810552282947
            ],
            [
              -48.660314083099365,
              -26.907901664344035
            ],
            [
              -48.659048080444336,
              -26.907901664344035
            ],
            [
              -48.659048080444336,
              -26.908810552282947
            ],
            [
              -48.660314083099365,
              -26.908810552282947
            ]
          ]
        ]
      }
}
