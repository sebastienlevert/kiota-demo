import {Msdyn_msteamssetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_msteamssettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_msteamssetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_msteamssetting();
}
