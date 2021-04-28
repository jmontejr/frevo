module.exports = {
  name: 'generate:service',
  description: 'Create new service inside src/app/modules/services',
  alias: ['gs'],
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { success, error }
    } = toolbox

    if(!parameters.first) {
      error('Service name must be specified!');
      return;
    } else {

      const name = parameters.first

      await generate({
        template: 'modules/index.js.ejs',
        target: `src/app/modules/services/${ name }/index.js`,
        props: { name }
      })

      await generate({
        template: 'modules/index.test.js.ejs',
        target: `src/app/modules/services/${ name }/index.test.js`,
        props: { name }
      })

      success(`Generated ${ name } service.`)
    }
  }
}
