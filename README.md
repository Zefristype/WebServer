To start the server run: npm start







To start the server on dev move run: npm run start:dev


API


https://webserver-fpht.onrender.com/api/temperatures



GET:

Get all - https://webserver-fpht.onrender.com/api/temperatures

Get by id - https://webserver-fpht.onrender.com/api/temperatures/{id}



POST:

https://webserver-fpht.onrender.com/api/temperatures

Body:


{
  temperature: Number
  time: String
}


DELETE:

https://webserver-fpht.onrender.com/api/temperatures/:id

UPDATE:

https://webserver-fpht.onrender.com/api/temperatures/:id

{
  temperature: Number
  time: String
}
