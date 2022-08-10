export default [
  {
    href: '/',
    label: 'Home',
    icon: 'home'
  },
  {
    href: '/tools',
    label: 'Tools',
    icon: 'home',
    open: false,
    children: [
      {
        href: '/tools/gear-enhancement-calculator',
        label: 'Gear Enhancement Calculator',
        icon: 'home',
      },
      {
        href: '/tools/gear-efficiency-calculator',
        label: 'Gear Efficiency Calculator',
        icon: 'home',
      }
    ]
  },
]