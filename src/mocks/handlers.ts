import { rest } from 'msw';
import { faker } from "@faker-js/faker/locale/zh_CN";

export const handlers = [
  rest.get('/api/user', (req, res, ctx) => {
    return res(
      ctx.status(200), 
      ctx.delay(1000),
      ctx.json(
        Array.from({ length: 10 }).map(() => ({
          fullname: faker.person.fullName(),
          email: faker.internet.email(),
          avatar: faker.image.avatar(),
          address: faker.location.streetAddress(),
        }))
      )
    );
  }),
];
