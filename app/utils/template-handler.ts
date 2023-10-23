import path from 'path'
import fs from 'fs'

const cssLoc = path.resolve('app', 'assets', 'html')
const cssFile = path.join(cssLoc, 'welcome.html')
// const cssContent = fs.readFileSync(cssFile, 'utf-8')

async function templateHandler(templateName: any, data: any) {
  return fetch(templateName)
    .then((response) => response.text())
    .then((template) => {
      for (const key in data) {
        const regex = new RegExp(`{{${key}}}`, 'g')
        template = template.replace(regex, data[key])
      }
      console.log(template)
      return template
    })
}

export default templateHandler
