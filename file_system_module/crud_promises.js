import { readFile } from 'fs'
import fs from 'fs/promises'

async function readFileContent(filename){
    const data = await fs.readFile(filename, "utf8")
    console.log(data);
}
readFileContent("notes.txt")