import * as Mariadb from "mariadb";

export default class orderQueries {

    constructor() {
    }
    
    async validateOrderInDB(orderId: string) {
        const conn = await Mariadb.createConnection({ host: "specialisatieopleidingv2.northeurope.cloudapp.azure.com", user: process.env.dbUser, password: process.env.dbPassword });
        try {
            const row = await conn.query(`select * from bitnami_opencart.oc_order where order_id=${orderId}`);
            return row
        }
        finally{
            conn.end()
        }
        
    }

}