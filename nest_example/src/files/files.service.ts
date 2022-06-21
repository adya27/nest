import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";
import * as uuid from "uuid";

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    try {
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static')
      console.log("=>(files.service.ts:12) filePath", filePath);
      console.log("=>(files.service.ts:13) fs.existsSync(filePath)", fs.existsSync(filePath));
      if(!fs.existsSync(filePath)){
        fs.mkdirSync(filePath, {recursive: true})
        console.log("in if statement", filePath);
      }
      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      return fileName;
    } catch (e) {
      throw new HttpException(
        "Error writing file",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
    return;
  }
}
