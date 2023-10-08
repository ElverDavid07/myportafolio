interface NavLink {
	to: string
	name: string
	href: string
	offset?: number
}
export const NavbarLink: NavLink[] = [
	{
		to: 'home',
		href: '#home',
		name: 'Inicio',
	},
	{
		to: 'about',
		href: '#about',
		name: 'Sobre mi',
		offset: -140,
	},
	{
		to: 'knowledge',
		href: '#knowledge',
		name: 'Conocimientos',
		offset: -90,
	},
	{
		to: 'certificates',
		href: '#certificates',
		name: 'Certificados',
		offset: -200,
	},
	{
		to: 'projects',
		href: '#projects',
		name: 'Projectos',
		offset: -190,
	},
	{
		to: 'contact',
		href: '#contact',
		name: 'Contacto',
		offset: -130,
	},
]
