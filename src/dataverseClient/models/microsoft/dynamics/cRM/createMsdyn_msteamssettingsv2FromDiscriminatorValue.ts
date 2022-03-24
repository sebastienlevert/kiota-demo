import {Msdyn_msteamssettingsv2} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_msteamssettingsv2FromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_msteamssettingsv2 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_msteamssettingsv2();
}
