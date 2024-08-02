const video = document.querySelector("#myVidPlayer");

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
    };
  })
  .catch((error) => {
    console.error("Error accessing the camera: ", error);
  });
