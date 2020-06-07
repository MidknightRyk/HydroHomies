import React from "react";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import axios from "axios";
import buffer from 'buffer';
global.Buffer = buffer.Buffer

export const ProfilePage = () => {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [currentImage, setCurrentImage] = React.useState('');

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const getUser = () => {
    user = JSON.parse(localStorage.getItem("user"))
    console.log("userinfo=", JSON.parse(localStorage.getItem("user")))
    axios({
      method: "GET",
      url: "/profile",
      headers: {
        "authorization": "Bearer <JWT_TOKEN>".replace("<JWT_TOKEN>", user.token)
      },
      data: {
        user_id: user.user_id
      }
    })
        .then(function(response) {
          console.log(response)
          if (response.status === 200) {
            return response.data.body
          } else {
            return response.data.body
          }
        })
        .catch(function(error) {
          return error
        });
  }

  let user;
  user = getUser()

  console.log("check check", user)

  /*axios({
    method: 'get',
    url: '/images/' + user.displayPic,
    responseType: 'arraybuffer'
    }).then(function (response) {
      const dp = Buffer.from(response.data, 'binary').toString('base64')
      setCurrentImage({ source: "data:image/png;base64," + dp })
    });
    */

  return (
    <div className="Table">
      <h1> Hydrohomies </h1>{" "}
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td> Profile Picture </td>{" "}
            <td>
              <Col xs={6} md={4}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={imageUploader}
                />{" "}
                <Image
                  src= {currentImage.source}
                  rounded
                  onClick={() => imageUploader.current.click()}
                  ref={uploadedImage}
                  style={{
                    width: "60%",
                    height: "60%",
                    backgroundImage: "./Assets/user.png"
                  }}
                  alt="upload image here!"
                />
              </Col>{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            <td> Username </td> <td> {user.username} </td>{" "}
          </tr>{" "}
          <tr>
            <td> Email </td> <td> {user.email} </td>{" "}
          </tr>{" "}
        </tbody>{" "}
      </Table>{" "}
      <a href="./dashboard">
        {" "}
        <em> Return to Dashboard </em>
      </a>
    </div>
  );
};
