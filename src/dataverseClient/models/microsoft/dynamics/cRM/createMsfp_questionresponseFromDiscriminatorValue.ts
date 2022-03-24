import {Msfp_questionresponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_questionresponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_questionresponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_questionresponse();
}
