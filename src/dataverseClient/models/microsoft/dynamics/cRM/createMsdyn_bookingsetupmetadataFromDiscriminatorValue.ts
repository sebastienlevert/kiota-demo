import {Msdyn_bookingsetupmetadata} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_bookingsetupmetadataFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_bookingsetupmetadata {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_bookingsetupmetadata();
}
