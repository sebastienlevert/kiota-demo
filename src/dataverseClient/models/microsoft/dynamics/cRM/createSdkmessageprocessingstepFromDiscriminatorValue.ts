import {Sdkmessageprocessingstep} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSdkmessageprocessingstepFromDiscriminatorValue(parseNode: ParseNode | undefined) : Sdkmessageprocessingstep {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Sdkmessageprocessingstep();
}
