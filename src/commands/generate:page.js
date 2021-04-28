module.exports = {
  name: 'generate:page',
  description: 'Create new page inside src/app/modules/pages',
  alias: ['gp'],
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { success, error }
    } = toolbox

    if(!parameters.first) {
      error('Page name must be specified!');
      return;
    } else {

      const name = parameters.first

      await generate({
        template: 'pages/index.html.ejs',
        target: `src/app/modules/pages/${ name.toLowerCase() }/index.html`,
        props: { name, root: '..' }
      })

      success(`Generated ${ name } page.`)
    }
  }
}
