import {Msdyn_requirementrelationship} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_requirementrelationshipFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_requirementrelationship {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_requirementrelationship();
}
