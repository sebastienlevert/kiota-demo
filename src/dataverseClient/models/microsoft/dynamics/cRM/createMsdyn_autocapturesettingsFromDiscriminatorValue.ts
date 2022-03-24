import {Msdyn_autocapturesettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_autocapturesettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_autocapturesettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_autocapturesettings();
}
