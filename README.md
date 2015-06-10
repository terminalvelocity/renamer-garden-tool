Reanmer [Garden Tool]
=====

[![Join the chat at https://gitter.im/terminalvelocity/seeds.js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/terminalvelocity/seeds.js)

Renamer is a garden tool ([Seeds.js](https://github.com/terminalvelocity/seeds.js) Plugin) to easily iterate over a folder of items and rename them to the same string appended by a number.

Currently experimenting with plugin architecture.

## Installation

`npm install renamer-garden-tool`

## Usage

```
var Renamer = require('renamer-garden-tool')
Renamer.help() // static method (Function on the contructor/class not the instance)
```
or

```
var renamer = new Renamer()
renamer.help // getter that returns the static method as an instance method
```

outputs


```
Renamer: A tool to easily iterate over a folder of items
and rename them to the same string appended by a number.

      
Inputs: String srcDir
        String newNameBase

      
Usage: 
        var Renamer = require('renamer-garden-tool')
        var renamer = new Renamer(srcDir, newNameBase)
        renamer.do()

      
Note: Currently this implementation is naive and has no tests written. 
PR's accepted. Conversation highly encouraged.
```

