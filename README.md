# plupload-antd-react

- plupload-antd-React is a component that integrates plupload and ant-design to upload large file fragments
- This component uses Ant-Design to implement a style similar to its Upload component
- This component supports custom Settings for upload file sizes, types, supported formats, and fragment sizes
- Configure file information callbacks after upload for subsequent operations


# Basic usage

## Installation

```
$ npm i --save plupload-antd-react
```

## Example

### Import

```
import BigPlUpload from 'plupload-antd-react'
```

### use in page

```
<BigPlUpload
  getFileList={(fileList) => {
    console.log(fileList);
  }}
  chunk_size={'10kb'}
  autoUpload={true}
  buttonSelect={'上传文件'}
  maxSize={'5M'}
  maxLength={5}
  url='/upload'
/>

```

## 5、Option

```
- getFileList   The callback was successfully uploaded
    - fileList  Uploaded file list data
        - name  The file name
        - url   The file path
        - size  The file size
        - response  The return value of the file upload interface
- chunk_size    Example Set the file fragment size. The default unit is byte and other units can be passed in as strings with units
- autoUpload    This value can be set to true or false
                If true, it means that the file is uploaded immediately after selection
                If false, it means that selecting files and uploading files are carried out in two steps
                Currently only true is supported.The case of false will be improved later
- buttonSelect  Select the text of the File button. Default is 'select'
- maxSize       Size limit for a single uploaded file. The default unit is byte and other units can be passed in as strings with units
- maxLength     Maximum number of uploaded files
- url           IP address of the interface for uploading files
```