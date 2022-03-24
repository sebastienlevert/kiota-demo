import {Msdyn_assettemplateassociation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_assettemplateassociationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_assettemplateassociation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_assettemplateassociation();
}
