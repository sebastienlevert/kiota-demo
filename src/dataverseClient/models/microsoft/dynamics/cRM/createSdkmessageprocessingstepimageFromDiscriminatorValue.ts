import {Sdkmessageprocessingstepimage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSdkmessageprocessingstepimageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Sdkmessageprocessingstepimage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Sdkmessageprocessingstepimage();
}
