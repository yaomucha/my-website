export default function queryData(sql,_res) {
    var mysql = require('mysql')

    var connection = mysql.createConnection({
        host: 'db4free.net',
        user: 'ymcweb',
        password: 'sasuke9999',
        port: '3306',
        database: 'ymcweb'
    })

    connection.connect()


    connection.query(sql, (err, res) => {
        _res.status(200).json({ data: res })
    })

    connection.end()  
}


