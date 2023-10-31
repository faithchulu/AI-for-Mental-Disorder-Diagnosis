const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Chimwemwe",
    database: "mental"
})

client.connect().then(()=>{
    console.log('database connected  successfully!')
})

