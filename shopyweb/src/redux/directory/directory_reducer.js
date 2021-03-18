const INITIAL_STATE = {
  sections: [
    {
      title: ' watches',
      imageUrl: 'https://i.ibb.co/VYzVT1F/watch.jpg',
      id: 1,
      linkUrl: 'shopy/watches',
    },
    {
      title: 'sunglasses',
      imageUrl:
        'https://i.ibb.co/TP035xG/Screen-Shot-2021-03-17-at-9-54-47-PM.png',
      id: 3,
      linkUrl: 'shopy/sunglasses',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/sHPG98B/senakers.jpg',
      id: 2,
      linkUrl: 'shopy/sneakers',
    },
    {
      title: 'women dress',
      imageUrl: 'https://i.ibb.co/Wph8Ww1/women.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shopy/womens',
    },
    {
      title: 'Kids fashion',
      imageUrl:
        'https://i.ibb.co/hF6HPdv/Screen-Shot-2021-03-17-at-6-19-04-PM.png',
      size: 'large',
      id: 5,
      linkUrl: 'shopy/kids',
    },
    {
      title: 'Men Fashion',
      imageUrl: 'https://i.ibb.co/1RkF6XQ/myimg.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shopy/mens',
    },
  ],
};
const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
