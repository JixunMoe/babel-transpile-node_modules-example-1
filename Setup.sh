#!/bin/sh

mkdir -p node_modules/jixun

cp TestClass.js node_modules/jixun
cp run-test.js  node_modules/jixun

node test-package.js
