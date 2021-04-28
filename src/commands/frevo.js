const command = {
  name: 'frevo',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Frevo Front-End static generator CLI')
  }
}

module.exports = command
