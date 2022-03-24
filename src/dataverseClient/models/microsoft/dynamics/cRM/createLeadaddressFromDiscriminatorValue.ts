import {Leadaddress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLeadaddressFromDiscriminatorValue(parseNode: ParseNode | undefined) : Leadaddress {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Leadaddress();
}
