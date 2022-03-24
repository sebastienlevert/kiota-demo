import {Msdyn_relationshipinsightsunifiedconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_relationshipinsightsunifiedconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_relationshipinsightsunifiedconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_relationshipinsightsunifiedconfig();
}
