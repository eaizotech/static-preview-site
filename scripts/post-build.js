// import {openSync, open} from 'fs'
const fs = require('fs')


const buildFix = () => {
    fs.open('docs/.nojekyll', 'w', (err, file) => {
        if (err) {
          throw err
        }
      
        console.log('File is created.')
      })
}

buildFix()