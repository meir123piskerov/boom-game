export   function randomNum() {
    const bombIndex = [];
    for (let i = 0; i < 10; ) {
      const randomPlace = Math.floor(Math.random() * 80);
      if (!bombIndex.includes(randomPlace)) {
        bombIndex.push(randomPlace);
        i++;
      }
    }
    return bombIndex;
  }
