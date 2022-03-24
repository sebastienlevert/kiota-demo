import {Msdyn_assetcategorytemplateassociation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_assetcategorytemplateassociationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_assetcategorytemplateassociation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_assetcategorytemplateassociation();
}
