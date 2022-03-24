import {Msdyn_bookingalertCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_bookingalertCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_bookingalertCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_bookingalertCollectionResponse();
}
