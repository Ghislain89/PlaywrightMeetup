import orderQueries from "./orderQueries.database";

export default class DatabaseIndex {
    databaseConnector: orderQueries;
    

    constructor() {
        this.databaseConnector = new orderQueries()
    }

    
}