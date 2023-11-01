//crie um array que vai armazenar 
//os dados da tabela
const rooms = [];
//crie um loop que vai de 0 até 29
for (let i = 0; i < 30; i++) {
  rooms.push({
    roomNumber: i + 1,
    status: "available",
  });
}
//exporte o array
export default rooms;
