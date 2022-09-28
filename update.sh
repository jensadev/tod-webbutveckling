#! /bin/bash
echo "TOD - Update Script"
echo "---------------------"

# fetch a copy of the tod repo
git clone https://github.com/jensnti/tod tod-latest

# remove files that are to be replaced
echo "Removing old files..."
echo "---------------------"
rm .eleventy.js
rm rollup.config.js
rm -rf src/_includes
rm -rf src/_theme
rm -rf src/assets
rm -rf src/filters
rm -rf src/js
rm -rf src/paired-shortcodes
rm -rf src/scss
rm -rf src/shortcodes
rm -rf src/transforms
rm -rf src/utils

# copy files from tod-latest
echo "Copying new files..."
echo "---------------------"
cp tod-latest/.eleventy.js .
cp tod-latest/rollup.config.js .
cp -r tod-latest/src/_includes src/
cp -r tod-latest/src/_theme src/
cp -r tod-latest/src/assets src/
cp -r tod-latest/src/filters src/
cp -r tod-latest/src/js src/
cp -r tod-latest/src/paired-shortcodes src/
cp -r tod-latest/src/scss src/
cp -r tod-latest/src/shortcodes src/
cp -r tod-latest/src/transforms src/
cp -r tod-latest/src/utils src/

# clean up
echo "Cleaning up..."
echo "---------------------"
rm -rf tod-latest