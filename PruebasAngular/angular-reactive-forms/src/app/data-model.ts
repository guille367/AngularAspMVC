class Hero {
  id = 0;
  name = '';
  addresses: Address[];
}

class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
}

const heroes: Hero[] = [
  {
    id: 1,
    name: 'Whirlwind',
    addresses: [
      { street: '123 Main', city: 'Anywhere', state: 'CA', zip: '94801' },
      { street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226' },
    ]
  },
  {
    id: 2,
    name: 'Bombastic',
    addresses: [
      { street: '789 Elm', city: 'Smallville', state: 'OH', zip: '04501' },
    ]
  },
  {
    id: 3,
    name: 'Magneta',
    addresses: []
  },
];

const states = ['CA', 'MD', 'OH', 'VA'];

export { Hero, Address, heroes, states }
