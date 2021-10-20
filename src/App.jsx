import './App.css'
import MyPlUpload from "./component";
import {Row, Col} from 'antd'

function App() {
    const fileList = [
        {
            id: '1',
            type: 'video',
            uploaded: true,
            name: '文件名',
            url: 'https://www.ltzhdj.cn/data/uploads/20210326/preview/default/file/2021/10/19/c22d9041866ebeaa4ab04c758641ea28/null/1634612965263.png',
        }
    ]
    return (
        <Row style={{paddingTop: 50}}>
            <Col span={10} offset={1}>
                <MyPlUpload
                    autoUpload={true}
                    buttonSelect={'上传文件'}
                    getFileList={(fileList) => {
                        // console.log(fileList);
                    }}
                    defaultFileList={fileList ? fileList : []}
                    chunk_size={'10kb'}
                    maxSize={'5M'}
                    maxLength={5}
                    accept={'png'}
                    url={`https://www.ltzhdj.cn/upload_system/file/plUpload`}
                />
            </Col>
        </Row>
    )
}

export default App;
