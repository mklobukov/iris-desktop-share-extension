Desktop-share-extension
=======

This extension allows to use desktop capture feature in chrome and firefox

Installation
============
The extension is tied to your domain so modify `manifest.json` accordingly and upload to chrome/firefox store.

How to use?
===========

[This is a chrome specific example]
From your app, call 
```
var sources = ["screen", "window"];
chrome.runtime.sendMessage(
          '<extension id>',
          {
              getStream: true,
              sources: sources
          },
          response => {
              console.log("Response from extension: ", response);
              
              // If successful, the response will have a streamId which can be passed as a constrain to JS sdk while creating streams
          }
      );
```
