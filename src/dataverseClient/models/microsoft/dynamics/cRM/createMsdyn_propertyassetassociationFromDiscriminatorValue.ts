import {Msdyn_propertyassetassociation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_propertyassetassociationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_propertyassetassociation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_propertyassetassociation();
}
