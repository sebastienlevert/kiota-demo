import {Msdyn_segmentcatalogue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_segmentcatalogueFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_segmentcatalogue {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_segmentcatalogue();
}
