import {Msdyn_chatquestionnaireresponseitem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_chatquestionnaireresponseitemFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_chatquestionnaireresponseitem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_chatquestionnaireresponseitem();
}
