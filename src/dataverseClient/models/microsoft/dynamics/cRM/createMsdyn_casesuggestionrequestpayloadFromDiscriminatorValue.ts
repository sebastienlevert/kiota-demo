import {Msdyn_casesuggestionrequestpayload} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_casesuggestionrequestpayloadFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_casesuggestionrequestpayload {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_casesuggestionrequestpayload();
}
