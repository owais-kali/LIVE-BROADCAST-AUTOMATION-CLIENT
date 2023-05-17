import { env } from "src/configs/env";
import { SendAPIRequest } from "../Shortcuts/Shortcuts";
import { FileType, Input } from "../Shortcuts/Functions/Input";

export const ActiveGTs: Map<number, string> = new Map();

export function LoadInGameGT(GT:any): void {
    
    let input = new Input();
    let ft: string = FileType.Title;

    input.AddInput(ft, GT);
    SendAPIRequest(input);
}
