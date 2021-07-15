import type * as CSSUtil from './css-util'
import type * as Default from './default'
import type * as StyledComponent from './styled-component'
import type * as Util from './util'

/** Stitches interface. */
export interface Stitches<
	Prefix = Default.Prefix,
	Media = Default.Media,
	Theme = {},
	ThemeMap = Default.ThemeMap,
	Utils = {}
> {
	config: {
		prefix: Prefix
		media: Media
		theme: Theme
		themeMap: ThemeMap
	},
	prefix: Prefix
	global: {
		(style: {
			[prelude: string]: CSSUtil.Style<Media, Theme, ThemeMap, Utils>
		}): {
			(): string
		}
	},
	keyframes: {
		(style: {
			[offset: string]: CSSUtil.Style<Media, Theme, ThemeMap, Utils>
		}): {
			(): string
			name: string
		}
	},
	theme: {
		(
			nameOrScalesArg0: (
				| string
				| (
					& {
						[scale in keyof Theme]?: {
							[token in keyof number | string]: boolean | number | string
						}
					}
					& {
						[scale in string]: {
							[token in keyof number | string]: boolean | number | string
						}
					}
				)
			),
			nameOrScalesArg1?: (
				| string
				| (
					& {
						[scale in keyof Theme]?: {
							[token in keyof number | string]: boolean | number | string
						}
					}
					& {
						[scale in string]: {
							[token in keyof number | string]: boolean | number | string
						}
					}
				)
			)
		): {
			className: string
			selector: string
		}
	}
	reset: {
		(): void
	}
	getCssString: {
		(): string
	},
	css: {
		<
			Composers extends (
				| string
				| Function
				| { [name: string]: unknown }
			)[]
		>(
			...composers: {
				[K in keyof Composers]: (
					Composers[K] extends string
						? Composers[K]
					: Composers[K] extends React.ExoticComponent<any>
						? Composers[K]
					: Composers[K] extends React.JSXElementConstructor<any>
						? Composers[K]
					: Composers[K] extends Function
						? Composers[K]
					: Composers[K] extends {
						[K2 in keyof Composers[K]]: Composers[K][K2]
					}
						? (
							& {
								[K2 in keyof Composers[K]]:
									K2 extends 'variants'
										? {
											[name: string]: {
												[pair in number | string]: CSSUtil.Style<Media, Theme, ThemeMap, Utils>
											}
										}
									: unknown
							}
							& CSSUtil.Style<Media, Theme, ThemeMap, Utils>
						)
					: never
				)
			}
		): StyledComponent.CssComponent<
			StyledComponent.StyledComponentType<Composers>,
			StyledComponent.StyledComponentProps<Composers>,
			Media,
			Theme,
			ThemeMap,
			Utils
		>
	}
}

/* ========================================================================== */

type Merge<T1, T2> = {
	[K in keyof T1 | keyof T2]: (
		| (
			K extends keyof T1 ? T1[K] : never
		)
		| (
			K extends keyof T2 ? T2[K] : never
		)
	)
}

type Tokens<Theme, K> = (
	K extends keyof Theme
		? Util.Prefixed<'$', keyof Theme[K]>
	: never
)