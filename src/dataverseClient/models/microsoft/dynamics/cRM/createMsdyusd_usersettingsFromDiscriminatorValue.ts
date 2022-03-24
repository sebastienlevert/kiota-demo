import {Msdyusd_usersettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_usersettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_usersettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_usersettings();
}
