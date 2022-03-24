import {Msdyn_usersetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_usersettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_usersetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_usersetting();
}
