#!/bin/bash

cat luxUtilities.min.js luxCountdown.min.js > full.js
yuicompressor --type js --charset UTF-8 --nomunge --preserve-semi full.js -o full.min.js