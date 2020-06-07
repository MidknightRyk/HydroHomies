import React from "react";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import axios from "axios";
import buffer from "buffer";
global.Buffer = buffer.Buffer;

export const ProfilePage = () => {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [currentImage, setCurrentImage] = React.useState("");
  const [userData, setUserData] = React.useState({
    username: "",
    email: "",
    hash: "",
    salt: "",
    location: "",
    lastVisit: "",
    dateJoined: "",
    displayPic: ""
  });

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
    const data = JSON.parse(localStorage.getItem("user"));
    axios({
      method: "GET",
      url: "/profile/" + data.user_id,
      headers: {
        authorization: "Bearer <JWT_TOKEN>".replace("<JWT_TOKEN>", data.token)
      }
    })
        .then(function (response) {
          //console.log(response.data);
          if (response.status === 200) {
            const user = response.data;
            console.log(user);
            setUserData(user);
          } else {
            return response.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  const getDP = () => {
    axios({
      method: "get",
      url: "/images/" + userData.displayPic,
      responseType: "arraybuffer"
    }).then(function (response) {
      const dp = Buffer.from(response.data, "binary").toString("base64");
      setCurrentImage({source: "data:image/png;base64," + dp});
    });
  }

  getUser();
  getDP();

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
                  src={currentImage.source}
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
            <td> Username </td> <td> {userData.username} </td>{" "}
          </tr>{" "}
          <tr>
            <td> Email </td> <td> {userData.email} </td>{" "}
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
