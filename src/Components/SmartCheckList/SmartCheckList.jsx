import { TaobaoCircleOutlined } from "@ant-design/icons";
import {
  BorderOuterOutlined,
  CloudDownloadOutlined,
  DeleteOutlined,
} from "@mui/icons-material";

function SmartCheckList() {
  return (
    <div className="flex  items-center">
      <div>
        <BorderOuterOutlined />
      </div>
      <div className=" w-full flex justify-between items-center">
        <div>
          <p>Smart Checklist </p>
          <p>Default Title, 12:00 DTSU </p>
        </div>
        <div className="flex flex-row justify-center gap-4 items-center">
          <input type="number" className="w-[50px] rounded-lg" />
          <DeleteOutlined />
        </div>
      </div>
    </div>
  );
}

export default SmartCheckList;
