'use strict'

var CLI = require('soil-cli')
var cli = new CLI()

class Renamer {
  
  constructor(srcDir, newNameBase, destDir) {
    this.srcDir = srcDir || './src'
    this.destDir = newNameBase || `./dist`
    this.newName = newNameBase || `Seeds.js-Logo-Comp`    
  } 
  
  do() {
    var self = this
    fs.mkdirSync(this.destDir)
    return self.src.forEach(function(item, index) { 
      var currentItem = item.split('.')
      var newItemName = `${self.newName}-${index}.${currentItem[1].toLowerCase()}`
        
      cli.ui(`Copying file ${self.srcDir}/${item} to ${self.destDir}/${newItemName}...`.inverse())
      cli.cp(`${self.srcDir}/${item}`, `${self.destDir}/${newItemName}`)
    })
  }

  get src() {
    cli.debug('this.srcDir')
    return fs.readdirSync(this.srcDir)
  } 

  static test() {
    cli.error('Not Implemented Yet')
  }

  static help() { 
    return cli.ui(this.description(), this.inputs(), this.usage(), this.notes())
  }

  get help() {
    this.constructor.help()
  }

  static description() {return(
`
${'Renamer:'.black().bold().bgWhite().underline()} A tool to easily iterate over a folder of items
and rename them to the same string appended by a number.

`)
  }

  static inputs(){return(
`${'Inputs'.white()}: 
        ${'String'.bgRed().white()} ${'srcDir'.underline().white()}
        ${'String'.bgRed().white()} ${'newNameBase'.underline().white()}

`)
  }

  static usage(){return(
`${'Usage'.white()}: 
        var Renamer = require('renamer-garden-tool')
        var renamer = new Renamer(srcDir, newNameBase)
        renamer.do()

`)
  }

  static notes() {return(
`${'Note:'.yellow()} Currently this implementation is naive and has no tests written. PR's accepted. Conversation highly encouraged.`)
  }
}

module.exports = Renamer