/**
 * Created by mkesmetzis 26-Apri-21
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'type-empty': [0],
    'subject-empty': [0],
    'type-enum': [0],
    'function-rules/type-enum': [
      2,
      'always',
      parsed => {
        const headerRegex = /((([A-Z]{1,4})-([0-9]{1,6}))|(merge|sync|fix|revert)): (.+)/
        const isHeaderValid = parsed.header.match(headerRegex)
        if (isHeaderValid) {
          return [true]
        }
        return [false, `Message must match this regex: ${headerRegex} .\n
        The commit message must provide minimum one jira ticket id or a predefined type of commit followed by (:) symbol \n
        e.g: PS-2121:My commit message body. OR merge: development branch into master`]
      }
    ]
  }
}