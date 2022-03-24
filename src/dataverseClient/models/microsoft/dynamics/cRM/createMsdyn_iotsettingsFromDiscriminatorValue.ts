import {Msdyn_iotsettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iotsettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iotsettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iotsettings();
}
