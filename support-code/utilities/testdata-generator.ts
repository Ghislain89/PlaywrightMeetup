import { faker } from '@faker-js/faker/locale/nl';

export default class TestDataGenerator {
    
    public static generatePerson() {
       return {
        Name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number('06#########')
       }
    }

    public static generateAddress() {
        return{
        street: faker.address.streetAddress(),
        postalCode: faker.address.zipCode(),
        city: faker.address.cityName(),
        country: "Netherlands",
        province: "Utrecht"
        }
    }

}