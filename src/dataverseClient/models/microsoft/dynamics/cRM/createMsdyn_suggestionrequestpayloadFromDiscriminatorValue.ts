import {Msdyn_suggestionrequestpayload} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_suggestionrequestpayloadFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_suggestionrequestpayload {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_suggestionrequestpayload();
}
