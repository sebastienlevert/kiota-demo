import {Sdkmessage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSdkmessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Sdkmessage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Sdkmessage();
}
