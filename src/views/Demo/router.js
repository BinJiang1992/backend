export default {
  path: '/demo',
  meta: {
    title: 'Demo',
  },
  component: r => require.ensure([], () => r(require(`./index.vue`)), `/demo`),
}
