import { createStitches } from '../src/index.js'

describe('Composition', () => {
	test('Renders an empty component', () => {
		const { css, toString } = createStitches()
		const generic = css()
		expect(generic().props).toEqual({ className: 'PJLV' })
		expect(toString()).toBe('')
	})

	test('Renders composed styles with their own classes', () => {
		const { css, toString } = createStitches()
		const box = css({ borderSizing: 'border-box' })
		const flex = css(box, { display: 'flex' })
		const row = css(flex, { flexDirection: 'row' })
		expect(box.className).toBe('c-hkrHCb')
		expect(flex.className).toBe('c-hkrHCb')
		expect(row.className).toBe('c-hkrHCb')

		const title = css(box, flex, row, { background: 'red' })
		expect(title().className).toBe('c-hkrHCb c-dhzjXW c-ejCoEP c-elTJue')
		expect(toString()).toBe(`
			--sxs{--sxs:2 c-hkrHCb c-dhzjXW c-ejCoEP c-elTJue}
			@media{
				.c-hkrHCb{border-sizing:border-box}
				.c-dhzjXW{display:flex}
				.c-ejCoEP{flex-direction:row}
				.c-elTJue{background:red}
			}
		`.replace(/[\f\n\r\t\v]/g, ''))
	})
}) // prettier-ignore
