import {Msdyn_teamschatassociation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_teamschatassociationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_teamschatassociation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_teamschatassociation();
}
