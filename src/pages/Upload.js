import React, { Component } from "react";
import S3FileUpload from "react-s3";

const config = {
  bucketName: "bhs-test-img",
  dirName: 'photos', 
  region: "ap-south-1",
  accessKeyId: "AKIAIQOR7EZ5PJSW66PQ",
  secretAccessKey: "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",
};

export class Upload extends Component {
  
  upload(e) {
    console.log(e.target.files[0]);
    S3FileUpload.uploadFile(e.target.files[0], config)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  }
  render() {
    return (
      <div>
        <h1>aws upload</h1>
        <input type="file" onChange={this.upload} />
      </div>
    );
  }
}

export default Upload;
