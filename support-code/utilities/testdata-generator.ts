import { faker } from '@faker-js/faker/locale/en_US';

export default class TestDataGenerator {
    
    public static generateAccount() {
       return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        password: faker.internet.password(),
        DoB: "1",
        MoB: "1",
        YoB: "1980",
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: "Alabama",
        zipcode: faker.address.zipCode("#####"),
        mobilePhone: faker.phone.number("501######")
       }
    }
}