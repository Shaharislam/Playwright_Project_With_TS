const common = `
      --require setup/assertion.js
      --require setup/hooks.js
      --require setp-definitions/**/*.step.js
`
module.exports = {
    default: `${common} features/**/*.feature`,
}
      