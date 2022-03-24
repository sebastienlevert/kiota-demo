import {Systemuser} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSystemuserFromDiscriminatorValue(parseNode: ParseNode | undefined) : Systemuser {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Systemuser();
}
