module.exports = {
  name: 'create',
  description: 'Create new project',
  run: async toolbox => {
    const {
      parameters,
      filesystem,
      installPackages,
      template: { generate },
      print: { success, error, info }
    } = toolbox

    if(!parameters.first) {
      error('Project name must be specified!');
      return;
    } else {

      const stringToKebabCase = str => {
        return `${ str.charAt(0).toLowerCase() }${ str.slice(1) }`
          .replace(/[A-Z]/g, letter => `-${ letter.toLowerCase() }`);
      };
      const name = stringToKebabCase(parameters.first);

      await generate({
        template: 'start/package.json.ejs',
        target: `${ name.toLowerCase() }/package.json`,
        props: { name }
      })

      await generate({
        template: 'start/editorconfig.ejs',
        target: `${ name.toLowerCase() }/.editorconfig`
      })

      await generate({
        template: 'start/eslintrc.js.ejs',
        target: `${ name.toLowerCase() }/.eslintrc.js`
      })

      await generate({
        template: 'start/gitignore.ejs',
        target: `${ name.toLowerCase() }/.gitignore`
      })

      await generate({
        template: 'start/jest.config.js.ejs',
        target: `${ name.toLowerCase() }/jest.config.js`
      })

      await generate({
        template: 'start/babel.config.json.ejs',
        target: `${ name.toLowerCase() }/babel.config.json`
      })

      await generate({
        template: 'start/gulpfile.js.ejs',
        target: `${ name.toLowerCase() }/gulpfile.js`
      })

      await generate({
        template: 'start/paths.js.ejs',
        target: `${ name.toLowerCase() }/paths.js`
      })

      await generate({
        template: 'start/readme.md.ejs',
        target: `${ name.toLowerCase() }/README.md`,
        props: { name }
      })

      await generate({
        template: 'pages/index.html.ejs',
        target: `${ name.toLowerCase() }/src/app/modules/pages/index.html`,
        props: { name: 'main', root: '.' }
      })

      await generate({
        template: 'layouts/head.html.ejs',
        target: `${ name.toLowerCase() }/src/app/modules/layouts/Head/index.html`,
        props: { name }
      })

      await generate({
        template: 'layouts/header.html.ejs',
        target: `${ name.toLowerCase() }/src/app/modules/layouts/Header/index.html`
      })

      await generate({
        template: 'modules/index.js.ejs',
        target: `${ name.toLowerCase() }/src/app/modules/layouts/Header/index.js`,
        props: { name: 'Header' }
      })

      await generate({
        template: 'modules/index.test.js.ejs',
        target: `${ name.toLowerCase() }/src/app/modules/layouts/Header/index.test.js`,
        props: { name: 'Header' }
      })

      await generate({
        template: 'modules/style.scss.ejs',
        target: `${ name.toLowerCase() }/src/app/modules/layouts/Header/style.scss`,
        props: { name: 'header' }
      })

      await generate({
        template: 'layouts/footer.html.ejs',
        target: `${ name.toLowerCase() }/src/app/modules/layouts/Footer/index.html`
      })

      await generate({
        template: 'modules/index.js.ejs',
        target: `${ name.toLowerCase() }/src/app/modules/layouts/Footer/index.js`,
        props: { name: 'Footer' }
      })

      await generate({
        template: 'modules/index.test.js.ejs',
        target: `${ name.toLowerCase() }/src/app/modules/layouts/Footer/index.test.js`,
        props: { name: 'Footer' }
      })

      await generate({
        template: 'modules/style.scss.ejs',
        target: `${ name.toLowerCase() }/src/app/modules/layouts/Footer/style.scss`,
        props: { name: 'footer' }
      })

      await generate({
        template: 'scss/_base.scss.ejs',
        target: `${ name.toLowerCase() }/src/app/assets/scss/_base.scss`
      })

      await generate({
        template: 'scss/_functions.scss.ejs',
        target: `${ name.toLowerCase() }/src/app/assets/scss/_functions.scss`
      })

      await generate({
        template: 'scss/_mixins.scss.ejs',
        target: `${ name.toLowerCase() }/src/app/assets/scss/_mixins.scss`
      })

      await generate({
        template: 'scss/_placeholders.scss.ejs',
        target: `${ name.toLowerCase() }/src/app/assets/scss/_placeholders.scss`
      })

      await generate({
        template: 'scss/_plugins.scss.ejs',
        target: `${ name.toLowerCase() }/src/app/assets/scss/_plugins.scss`
      })

      await generate({
        template: 'scss/_typography.scss.ejs',
        target: `${ name.toLowerCase() }/src/app/assets/scss/_typography.scss`
      })

      await generate({
        template: 'scss/_variables.scss.ejs',
        target: `${ name.toLowerCase() }/src/app/assets/scss/_variables.scss`
      })

      await generate({
        template: 'scss/style.scss.ejs',
        target: `${ name.toLowerCase() }/src/app/assets/scss/style.scss`
      })

      filesystem.dir(`${ name.toLowerCase() }/src/app/assets/fonts`, { empty: true, mode: '700' })

      filesystem.dir(`${ name.toLowerCase() }/src/app/assets/images/misc`, { empty: true, mode: '700' })

      filesystem.dir(`${ name.toLowerCase() }/src/app/assets/images/icons`, { empty: true, mode: '700' })

      filesystem.dir(`${ name.toLowerCase() }/src/app/assets/js/libs`, { empty: true, mode: '700' })

      filesystem.dir(`${ name.toLowerCase() }/src/app/assets/js/plugins`, { empty: true, mode: '700' })

      await installPackages({ name });

      success(`\nGenerated ${ name } project.\n`);
      info(`cd ${ name } (to access project directory)\n`);
    }
  }
}
