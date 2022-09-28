import { faker } from "@faker-js/faker"


const newsList =  [
    {
        avatar: faker.image.avatar(),
        name: faker.name.fullName({ firstName: 'Jeff', sex: 'male' }) + " has stole 1 million dollars worth of jewellery ",
        description: " Jeff has reportedly stole 1 million dollars worth of jewelley for his own gain. "
    },
    {
        avatar: faker.image.avatar(),
        name: faker.name.fullName({ firstName: ' Georgia', sex: 'female' }) + " has reportedly won the lottery! ",
        description: " Georgia has won over 10 million dollars from the lottery! "
    },
    {
        avatar: faker.image.avatar(),
        name: faker.name.fullName({ firstName: ' Lucas', sex: ' male' }) + " has ran over 200km in a marathon! ",
        description: " Lucas has ran this much in a marathon for charity! "
    }



]

export default newsList;