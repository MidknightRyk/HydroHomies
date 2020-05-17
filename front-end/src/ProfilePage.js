import React from "react"
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


export const ProfilePage = () => {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const {current} = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="Table">
            <h1>Hydrohomies </h1>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>Profile Picture</td>
                        <td>
                            <Col xs={6} md={4}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    ref={imageUploader}
                                />
                                    <Image src='./Assets/user.png' rounded
                                           onClick={() => imageUploader.current.click()}
                                           ref={uploadedImage}
                                           style={{
                                               width: "60%",
                                               height: "60%",
                                               backgroundImage: './Assets/user.png'
                                           }}
                                           alt="upload image here!"
                                    />

                            </Col>
                        </td>
                    </tr>
                <tr>
                    <td>Username</td>
                    <td>homieboy</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>ahyeah@whatever.com</td>
                </tr>
                </tbody>
            </Table>
            <a className = "profilelink" href = "./dashboard"><em>Return to Dashboard</em></a>
        </div>
    );
}
