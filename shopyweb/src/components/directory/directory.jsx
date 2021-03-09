import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory_style.scss";
//Need to be class in order to store the state value of menu items to pass and create our menu

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "watches",
          imageUrl: "https://i.ibb.co/VYzVT1F/watch.jpg",
          id: 1,
          linkUrl: "watches",
        },
        {
          title: "glasses",
          imageUrl: "https://i.ibb.co/hDFp4kw/glasses.jpg",
          id: 2,
          linkUrl: "",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/sHPG98B/senakers.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/Wph8Ww1/women.jpg",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/1RkF6XQ/myimg.jpg",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
