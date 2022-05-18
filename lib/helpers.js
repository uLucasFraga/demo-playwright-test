const { faker } = require('@faker-js/faker')

const createUser = async page => {
  await page.type('data-testid=nome', faker.name.findName())
  await page.type('data-testid=email', faker.internet.email())
  await page.type('data-testid=password', faker.internet.password())
  await page.click('data-testid=checkbox')

  await page.click('data-testid=cadastrar')
}

module.exports = {
  createUser
}
