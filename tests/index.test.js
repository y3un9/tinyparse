const { tinyparse } = require('../src/index')

describe('tinyparse', ()=> {
    test('normal', () => {
        expect(tinyparse('<div>${text}</div>', { text: 'asd' })).toBe('<div>asd</div>')
    })
    test('invalid data', ()=> {
        expect(tinyparse('<div></div>')).toBe('<div></div>')
    })
    test('thisObj', ()=>{
        expect(tinyparse('<div>${this.text}</div>', null, { text: 'qwe' })).toBe('<div>qwe</div>')
    })
    test('nested data', ()=>{
        expect(tinyparse('<div>${obj.text}</div>', { obj: { text: 'zxc' } })).toBe('<div>zxc</div>')
    })
})