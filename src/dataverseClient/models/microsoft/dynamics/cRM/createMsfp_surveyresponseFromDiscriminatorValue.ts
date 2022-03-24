import {Msfp_surveyresponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_surveyresponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_surveyresponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_surveyresponse();
}
