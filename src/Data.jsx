import React, { useState } from "react";

const imageObject = {
  image1: {
    name: "Potato",
    value: true,
    imageUrl: "./src/assets/24 images/potato 01.PNG",
  },
  image2: {
    name: "	Carrot",
    value: false,
    imageUrl: "./src/assets/24 images/tomato 02.PNG",
  },
  image3: {
    name: "Cabbage",
    value: true,
    imageUrl: "./src/assets/24 images/cabbage 03.PNG",
  },
  image4: {
    name: "Beetroot",
    value: false,
    imageUrl: "./src/assets/24 images/cauliflower 04.PNG",
  },
  image5: {
    name: "Brinjal",
    value: true,
    imageUrl: "./src/assets/24 images/Brinjal 05.PNG",
  },
  image6: {
    name: "Green papaya",
    value: false,
    imageUrl: "./src/assets/24 images/cucumber 06.PNG",
  },
  image7: {
    name: "Carrot",
    value: true,
    imageUrl: "./src/assets/24 images/carrot 07.PNG",
  },
  image8: {
    name: "Spinach",
    value: false,
    imageUrl: "./src/assets/24 images/peas 08.PNG",
  },
  image9: {
    name: "Radish",
    value: true,
    imageUrl: "./src/assets/24 images/radish 09.PNG",
  },
  image10: {
    name: "Ginger",
    value: false,
    imageUrl: "./src/assets/24 images/lady's finger 10.PNG",
  },
  image11: {
    name: "Bottle Gourd",
    value: true,
    imageUrl: "./src/assets/24 images/bottle gourd 11.PNG",
  },
  image12: {
    name: "Turnip",
    value: false,
    imageUrl: "./src/assets/24 images/bitter gourd 12.PNG",
  },
  image13: {
    name: "Capsicum",
    value: true,
    imageUrl: "./src/assets/24 images/capsicum 13.PNG",
  },
  image14: {
    name: "Broccoli",
    value: false,
    imageUrl: "./src/assets/24 images/spinach 14.PNG",
  },
  image15: {
    name: "Beetroot",
    value: true,
    imageUrl: "./src/assets/24 images/beetroot 15.PNG",
  },
  image16: {
    name: "Ridge gourd",
    value: false,
    imageUrl: "./src/assets/24 images/broccoli 16.PNG",
  },
  image17: {
    name: "Green Bean",
    value: true,
    imageUrl: "./src/assets/24 images/green bean 17.PNG",
  },
  image18: {
    name: "Potato",
    value: false,
    imageUrl: "./src/assets/24 images/corn 18.PNG",
  },
  image19: {
    name: "Drumstick",
    value: true,
    imageUrl: "./src/assets/24 images/drumstick 19.PNG",
  },
  image20: {
    name: "Drumstick",
    value: false,
    imageUrl: "./src/assets/24 images/pumpkin 20.PNG",
  },
  image21: {
    name: "Mushroom",
    value: true,
    imageUrl: "./src/assets/24 images/mushroom 21.PNG",
  },
  image22: {
    name: "Spring onio",
    value: false,
    imageUrl: "./src/assets/24 images/apple gourd 21.PNG",
  },
  image23: {
    name: "Pointed Gourd",
    value: true,
    imageUrl: "./src/assets/24 images/pointed gourd 23.PNG",
  },
  image24: {
    name: "	Chow chow",
    value: false,
    imageUrl: "./src/assets/24 images/ridged gourd 24.PNG",
  },
  // Add more images with their names, values, and image URLs here
};

const Data = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const currentImage = imageObject[`image${currentImageIndex}`];
  console.log(currentImage);
  const handleYesClick = () => {
    if (currentImage.value === true) {
      setLikes(likes + 1);
    } else {
      setDislikes(dislikes + 1);
    }
    // Move to the next image
    if (currentImageIndex < 24) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
    // else{
    //   setCurrentImageIndex(1)
    // }
  };

  const handleNoClick = () => {
    if (currentImage.value === false) {
      setLikes(likes + 1);
    } else {
      setDislikes(dislikes + 1);
    }
    // Move to the next image
    if (currentImageIndex < 24) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handleResetClick = () => {
    setCurrentImageIndex(1);
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div>
      {currentImageIndex < 24 ? (
        <div>
          <div>
            <img src={currentImage.imageUrl} alt={currentImage.name} />
          </div>
          <div className="flex">
            <div className="flexcolumn2">
              <img
                className="img2"
                src="./src/assets/icon/dd.PNG"
                alt="dislikes"
              />{" "}
              <h1> {dislikes}</h1>
            </div>
            <div className="flexcolumn1">
              <img
                className="img1"
                src="./src/assets/icon/ll.PNG"
                alt="likes"
              />
              <h1>{likes}</h1>
            </div>
          </div>
          <h2>Is this a {currentImage.name}?</h2>
          <button className="marginRight button green" onClick={handleYesClick}>
            yes
          </button>
          <button className="button red" onClick={handleNoClick}>
            no
          </button>
          <div>
            <button onClick={handleResetClick}>
              <img
                className="button reset"
                src="./src/assets/icon/rest.jpg"
                alt="reset"
              />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Game Over</h1>
          <h2 className="green">Likes: {likes}</h2>
          <h2 className="red">Dislikes: {dislikes}</h2>
          <div>
            <button onClick={handleResetClick}>
              <img
                className="button reset"
                src="./src/assets/icon/rest.jpg"
                alt="reset"
              />
            </button>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Data;
