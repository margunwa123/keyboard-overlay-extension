#!/bin/sh
echo "Building release..."
bun run build
echo "Finished building"
echo "Zipping files..."
zip -r release.zip release
echo "Finizhed zipping"

