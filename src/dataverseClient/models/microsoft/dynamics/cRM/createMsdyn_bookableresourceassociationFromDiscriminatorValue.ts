import {Msdyn_bookableresourceassociation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_bookableresourceassociationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_bookableresourceassociation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_bookableresourceassociation();
}
