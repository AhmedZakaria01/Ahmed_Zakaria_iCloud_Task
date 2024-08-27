import { TaobaoCircleOutlined } from "@ant-design/icons";
import {
  BorderOuterOutlined,
  CloudDownloadOutlined,
} from "@mui/icons-material";

function KnowledgeTransfer() {
  return (
    <div className="flex  items-center">
      <div>
        <BorderOuterOutlined />
      </div>
      <div className=" w-full flex justify-between items-center">
        <div>
          <p>Knowledge Transfer </p>
          <p>Private Training, 12:00 DTSU </p>
        </div>
        <div className="flex flex-row justify-center gap-4 items-center">
          <CloudDownloadOutlined />
          <TaobaoCircleOutlined />
        </div>
          </div>
          
    </div>
  );
}

export default KnowledgeTransfer;
