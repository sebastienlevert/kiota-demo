import {Sdkmessageprocessingstepsecureconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSdkmessageprocessingstepsecureconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Sdkmessageprocessingstepsecureconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Sdkmessageprocessingstepsecureconfig();
}
