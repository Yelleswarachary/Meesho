import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'bootstrap'
export default function mens_item() {

  let Data = [
    {

      "url": "https://i5.walmartimages.com/asr/f53e3fd8-6990-4830-b986-b3423e77141c.9d1331e4bcf8451d8c838f36febcb824.jpeg",
      "size": 1,
      "price": 1,
      "title": "Cargo",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "url": "https://tse2.mm.bing.net/th?id=OIP.qzeuAlejxoPwc0RjKV7xGQHaJ4&pid=Api&P=0&h=180",
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {

      "url": "https://tse2.mm.bing.net/th?id=OIP.qzeuAlejxoPwc0RjKV7xGQHaJ4&pid=Api&P=0&h=180",
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
  ]
  return (
    <>
      <div>

        {Data.map(
          (value) => {
            return (


              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={value.url} />
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>
                    {value.body}
                  </Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            )
          }
        )}
      </div>
    </>
  )
}
