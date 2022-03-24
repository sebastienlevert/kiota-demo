import {Provisionlanguageforuser} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisionlanguageforuserFromDiscriminatorValue(parseNode: ParseNode | undefined) : Provisionlanguageforuser {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Provisionlanguageforuser();
}
