
// 1. Get user coordinates using navigator.geolocation.getCurrentPosition

      navigator.geolocation.getCurrentPosition(
          position => {
            console.log('LOGGING USER POSITION USING NAVIGATOR OBJECT...')
            console.log(position)
          },
          error => {
            console.log('ERROR GETTING USER POSITION USING NAVIGATOR OBJECT.')
          }
        );
