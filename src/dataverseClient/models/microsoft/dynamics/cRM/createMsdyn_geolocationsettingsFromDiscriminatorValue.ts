import {Msdyn_geolocationsettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_geolocationsettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_geolocationsettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_geolocationsettings();
}
