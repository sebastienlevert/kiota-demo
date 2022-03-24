import {Msdyn_visitorjourney} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_visitorjourneyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_visitorjourney {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_visitorjourney();
}
