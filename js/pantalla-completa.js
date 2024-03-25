let fullscreen;
      let fsEnter = document.getElementById("fullscr");
      fsEnter.addEventListener("click", function (e) {
        e.preventDefault();
        if (!fullscreen) {
          fullscreen = true;
          document.documentElement.requestFullscreen();
        } else {
          fullscreen = false;
          document.exitFullscreen();
        }
      });