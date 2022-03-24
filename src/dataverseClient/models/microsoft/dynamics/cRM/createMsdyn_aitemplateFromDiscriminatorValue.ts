import {Msdyn_aitemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_aitemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_aitemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_aitemplate();
}
