import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8080 })

const wsList: any[] = []

wss.on('connection', ws => {
  wsList.push(ws)

  ws.on('message', data => {
    wsList.forEach(cws => {
      cws.send(data.toString())
    })
  })

  ws.send('Você: <br><br> Encontrei o corpo do laranja no Reator!')
})