import {Accountleads} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccountleadsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Accountleads {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Accountleads();
}
