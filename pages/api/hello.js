// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = {
  "location": {
    "lat": -12.075498,
    "lng": -77.032282
  },
  "_id": "5e963fdaae8a470017f00cba",
  "name": "Carlos Rojas",
  "dni": 42544421,
  "cellphone": 998657777,
  "products": [
    {
      "state": false,
      "_id": "5e963fdaae8a470017f00cbb",
      "productName": "Libro Lexus",
      "description": "Es un libro de mis hijos que ya no usan"
    }
  ],
  "__v": 0
}
export default (req, res) => {
  res.status(200).json({ name: 'Juan Carlos' })
}
