import * as fs from 'fs';

export default class TestDataParser {
    static testData: any;
   
    public static getTestData(testcaseId) {
        this.testData = JSON.parse(fs.readFileSync('testdata/testdata.json', {encoding: 'utf8'}))
        const testdata = this.testData.testData.filter((json: {id: string}) => testcaseId === void 0 || testcaseId.id === json.id)
        return testdata[0]
    }

}