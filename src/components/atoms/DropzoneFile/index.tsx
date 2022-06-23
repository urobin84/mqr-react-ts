import React, {useState} from 'react';
import {Dropzone, FileItem, FullScreenPreview} from "@dropzone-ui/react";

const DropzoneFile = () => {
  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);

  // @ts-ignore
  const updateFiles = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);
  };

  // @ts-ignore
  const onDelete = (id) => {
    // @ts-ignore
    setFiles(files.filter((x) => x.id !== id));
  };

  // @ts-ignore
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };

  // @ts-ignore
  const handleClean = (files) => {
    console.log("list cleaned", files);
  };

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <Dropzone
      style={{ minWidth: "550px" }}

      //view={"list"}
      onChange={updateFiles}
      minHeight="195px"
      onClean={handleClean}
      value={files}
      maxFiles={10}

      //header={false}
      // footer={false}
      maxFileSize={2998000}

      //label="Drag'n drop files here or click to browse"
      //label="Suleta tus archivos aquí"
      accept=".csv"

      // uploadingMessage={"Uploading..."}
      url="https://my-awsome-server/upload-my-file"

      //of course this url doens´t work, is only to make upload button visible
      //uploadOnDrop
      //clickable={false}
      fakeUploading

      //localization={"FR-fr"}
      disableScroll
    >
      {files.map((file) => (
        <FileItem
          {...file}
          key={file.id}
          onDelete={onDelete}
          onSee={handleSee}

          //localization={"ES-es"}
          resultOnTooltip
          preview
          info
          hd
        />
      ))}
      <FullScreenPreview
        imgSource={imageSrc}
        openImage={imageSrc}
        onClose={(e: any) => handleSee(undefined)}
      />
    </Dropzone>
  );
};

export default DropzoneFile;
