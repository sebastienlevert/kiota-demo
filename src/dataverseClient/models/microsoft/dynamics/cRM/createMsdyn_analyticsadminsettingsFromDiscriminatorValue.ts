import {Msdyn_analyticsadminsettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_analyticsadminsettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_analyticsadminsettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_analyticsadminsettings();
}
