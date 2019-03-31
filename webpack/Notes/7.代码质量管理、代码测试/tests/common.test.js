const mod=require('../src/js/common');

test('test ajax', async ()=>{
  expect(await mod.sum(12, 5)).toBe(17);
});
