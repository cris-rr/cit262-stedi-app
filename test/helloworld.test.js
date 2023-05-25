import sayHello from '../utils/helloworld.mjs';
import assert from 'assert';

it('Should say Cristhians', () => {
  const helloString = sayHello();
  console.log(helloString);
  assert.equal(helloString, 'Cristhians');
  // expect(helloString).toBe('Cristhians');
});
