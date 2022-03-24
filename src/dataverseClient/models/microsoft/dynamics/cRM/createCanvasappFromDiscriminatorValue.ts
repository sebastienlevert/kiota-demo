import {Canvasapp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCanvasappFromDiscriminatorValue(parseNode: ParseNode | undefined) : Canvasapp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Canvasapp();
}
