module.exports = toolbox => {

  // A function to install packages present in package.json
  function installPackages(props) {
    const {
      system: { which, spawn },
      print: { info },
    } = toolbox;

    info('Starting package installation\n');
    // get the path of npm installation, you can also run `which npm` in terminal to see the output
    const npmPath = which('npm');

    return spawn(
      `cd ${ props.name } && git init && ${npmPath} install`,
      {
        shell: true,
        stdio: 'inherit',
        stderr: 'inherit',
      }
    );
  }

  // Put the function into the toolbox
  toolbox.installPackages = installPackages;

};
