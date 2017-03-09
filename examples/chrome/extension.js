'use strict';
var errorElement = document.querySelector('#errorMsg');
var video = document.querySelector('video');
function load()
{
	console.log("load extension");
  var sources = ["screen", "window"];
  chrome.runtime.sendMessage(
          'linbckddamppndancheiinbemggaeodb',
          {
              getStream: true,
              sources: sources
          },
          response => {
              console.log("Response from extension: ", response);
              if (!response)
              {
                console.log("No repsonse from extension !!!");
                return;
              }
              
              var constraints = window.constraints = {
                                audio: false,
                                video: {
                                  mandatory: {
                                    chromeMediaSource: "desktop",
                                    chromeMediaSourceId: response.streamId
                                  }
                                }
                              }
              
              navigator.mediaDevices.getUserMedia(constraints).
                  then(handleSuccess).catch(handleError);
              }
      );

	
}

function handleSuccess(stream) {
  var videoTracks = stream.getVideoTracks();
  console.log('Got stream with constraints:', constraints);
  console.log('Using video device: ' + videoTracks[0].label);
  stream.oninactive = function() {
    console.log('Stream inactive');
  };
  window.stream = stream; // make variable available to browser console
  var localVideo = document.getElementById('localVideo');
  localVideo.srcObject = stream;
}

function handleError(error) {
  console.log('getUserMedia error: ' + error.name, error);
}