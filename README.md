# Chrome extension template

## Prerequisite

1. [Bun](https://bun.sh/)

## Setup

```
bun install
```

## Develop

```
bun run dev
```

This will auto-reload the extension whenever there's changes. Note that
this will only reload the UI, if you need to reload service workers you
need to click the refresh button on your extension on
chrome://extensions

## Build

```
bun run build
```

This will create a build (minified) version before you submit to webstore

## Zip (for submitting to chrome webstore)

```
bun run zip
```

Then it will generate a `release.zip` file in base dir. Drag & drop
that file to chrome web store

## Folder Structure

```
├── html                  --> when you create a new page, put it here
├── public                --> for manifests, favicon, and other static assets
├── scripts               --> put your scripts here
├── service_workers       --> put your service workers here. Don't forget to add it to background.js
├── src                   --> main react files
└── styles                --> tailwind css
```
