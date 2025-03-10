import { createStitches } from '../src/index.js'

describe('Composition', () => {
	test('Renders an empty component', () => {
		const { styled, getCssText } = createStitches()
		const generic = styled()
		expect(generic.render().props).toEqual({ className: 'PJLV' })
		expect(getCssText()).toBe('')
	})

	test('Renders composed styled components with their own classes', () => {
		const { styled, getCssText } = createStitches()
		const Box = styled({ borderSizing: 'border-box' })
		const Flex = styled(Box, { display: 'flex' })
		const Row = styled(Flex, { flexDirection: 'row' })
		expect(Box.className).toBe('c-hkrHCb')
		expect(Flex.className).toBe('c-hkrHCb')
		expect(Row.className).toBe('c-hkrHCb')

		const Title = styled(Box, Flex, Row, { background: 'red' })
		expect(Title.render().props.className).toBe('c-hkrHCb c-dhzjXW c-ejCoEP c-elTJue')
		expect(getCssText()).toBe(`
			--sxs{--sxs:2 c-hkrHCb c-dhzjXW c-ejCoEP c-elTJue}
			@media{
				.c-hkrHCb{border-sizing:border-box}
				.c-dhzjXW{display:flex}
				.c-ejCoEP{flex-direction:row}
				.c-elTJue{background:red}
			}
		`.replace(/[\f\n\r\t\v]/g, ''))
	})
})
