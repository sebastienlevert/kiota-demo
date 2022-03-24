import {Msdyn_oc_geolocationprovider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_oc_geolocationproviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_oc_geolocationprovider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_oc_geolocationprovider();
}
