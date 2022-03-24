import {Usersettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUsersettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Usersettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Usersettings();
}
