import { Switch } from 'react-router';

const INITIAL_STATE = {
  sections: [
    {
      title: 'watches',
      imageUrl: 'https://i.ibb.co/VYzVT1F/watch.jpg',
      id: 1,
      linkUrl: 'watches',
    },
    {
      title: 'glasses',
      imageUrl: 'https://i.ibb.co/hDFp4kw/glasses.jpg',
      id: 2,
      linkUrl: '',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/sHPG98B/senakers.jpg',
      id: 3,
      linkUrl: '',
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/Wph8Ww1/women.jpg',
      size: 'large',
      id: 4,
      linkUrl: '',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/1RkF6XQ/myimg.jpg',
      size: 'large',
      id: 5,
      linkUrl: '',
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
