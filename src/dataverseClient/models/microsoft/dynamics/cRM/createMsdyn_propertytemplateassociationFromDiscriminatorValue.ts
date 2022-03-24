import {Msdyn_propertytemplateassociation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_propertytemplateassociationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_propertytemplateassociation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_propertytemplateassociation();
}
