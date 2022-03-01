import { fileURLToPath } from "url";
import path from "path";

// 获取绝对路径
export const __dirname = path.dirname(fileURLToPath(import.meta.url));
