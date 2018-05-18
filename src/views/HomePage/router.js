export default {
  path: '/',
  meta: {
    title: 'HomePage',
  },
  component: r => require.ensure([], () => r(require(`./index.vue`)), `/`),
}
