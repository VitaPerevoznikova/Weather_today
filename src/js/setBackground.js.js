export function setBackground(query) {
    const API_KEY = '39403201-abd58df21a454f128cd9be12a';
  
    const defaultImg = `../img/underwater-4286600_1920.jpg`;
  
    const randomNumber = max => {
      return Math.floor(Math.random() * max);
    };
  
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`)
      .then(response => response.json())
      .then(data => {
        // console.log('data', data);
        const index = randomNumber(data.hits.length);
        // console.log(index);
        // console.log('data', data.hits.length);
  
        const src = data.hits[index]?.largeImageURL ?? defaultImg;
  
        // console.log(src);
  
        const today = new Date();
        const dayHour = today.getHours();
  
        if (dayHour >= 11 && dayHour <= 17) {
          document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0),  rgba(255, 247, 3, 0.5)),
        url('${src}'); background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;`;
        } else if (dayHour >= 5 && dayHour <= 11) {
          document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(2, 107, 220, 0.5)),
        url('${src}'); background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;`;
        } else if (dayHour >= 18 && dayHour <= 23) {
          document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(104, 24, 2, 0.5)),
        url('${src}'); background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;`;
        } else {
          document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(32, 1, 85, 0.5)),
        url('${src}'); background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;`;
        }
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }