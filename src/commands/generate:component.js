module.exports = {
  name: 'generate:component',
  description: 'Create new component inside src/app/modules/components',
  alias: ['gc'],
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { success, error }
    } = toolbox

    if(!parameters.first) {
      error('Component name must be specified!');
      return;
    } else {

      const name = parameters.first

      await generate({
        template: 'modules/index.js.ejs',
        target: `src/app/modules/components/${ name }/index.js`,
        props: { name }
      })

      await generate({
        template: 'modules/index.html.ejs',
        target: `src/app/modules/components/${ name }/index.html`,
        props: { name }
      })

      await generate({
        template: 'modules/index.test.js.ejs',
        target: `src/app/modules/components/${ name }/index.test.js`,
        props: { name }
      })

      await generate({
        template: 'modules/style.scss.ejs',
        target: `src/app/modules/components/${ name }/style.scss`,
        props: { name }
      })

      success(`Generated ${ name } component.`)
    }
  }
}
