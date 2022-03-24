import {Msdyn_caseenrichment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_caseenrichmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_caseenrichment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_caseenrichment();
}
