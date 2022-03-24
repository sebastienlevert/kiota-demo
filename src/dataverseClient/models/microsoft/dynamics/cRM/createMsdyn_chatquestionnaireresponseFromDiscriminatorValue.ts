import {Msdyn_chatquestionnaireresponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_chatquestionnaireresponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_chatquestionnaireresponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_chatquestionnaireresponse();
}
