const getBlueColorFromImageData = (data, width, height) => {
  const count = data[0].length;
  const items = [[], []];

  for (let i = 0; 1 < count; i++) {
    const item = i * 4;

    data.forEach((currentData, index) => {
      const a = currentData[item + 3];

      if (a) {
        const x = i % width;
        const y = height - Math.floor(i / width);

        items[index].push({ x, y });
      }
    });
  }

  const [firstItems, secondItems] = items;
  const [longItems, shortItems] =
    firstItems.length >= secondItems.length
      ? [firstItems, secondItems]
      : [secondItems, firstItems];

  return longItems.map(({ x, y }, id) => {
    const tergetIndex = Math.round(id * (shortItems.length / longItems.length));
    return {
      x,
      y,
      sourceX: x,
      sourceY: y,
      targetX: shortItems[tergetIndex].x,
      targetY: shortItems[tergetIndex].y,
      id,
    };
  });
};

export const parselImage = (firstSrc, secondSrc, callbeck) => {
  const firstImg = new Image(500, 250);
  const secondImg = new Image(500, 250);

  firstImg.src = firstSrc;
  secondImg.src = secondSrc;

  firstImg.onload = function () {
    const width = this.width;
    const height = this.height;

    secondImg.onload = function () {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      // const context = canvas.getContext("2d", { willReadFrequently: true });

      canvas.width = width;
      canvas.height = height;

      const data = [firstImg, secondImg].map((image) => {
        context.clearRect(0, 0, width, height);
        context.drawImage(image, 0, 0, width, height, 0, 0, width, height);

        return context.getImageData(0, 0, width, height).data;
      });

      callbeck({
        coordinates: getBlueColorFromImageData(data, width, height),
        width,
        height,
      });
    };
  };
};
