import {Msdyn_salesinsightssettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_salesinsightssettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_salesinsightssettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_salesinsightssettings();
}
