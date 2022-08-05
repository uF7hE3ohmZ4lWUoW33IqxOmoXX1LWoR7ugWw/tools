export default [
  {
    href: '/',
    label: 'Home',
    icon: 'home'
  },
  {
    href: '/about',
    label: 'About',
    icon: 'home'
  },
  {
    href: '/todos',
    label: 'Todos',
    icon: 'home'
  },
  {
    href: '/tools',
    label: 'Tools',
    icon: 'home',
    open: false,
    children: [
      {
        href: '/tools/gear-calculator',
        label: 'Gear Calculator',
        icon: 'home',
      }
    ]
  },
]