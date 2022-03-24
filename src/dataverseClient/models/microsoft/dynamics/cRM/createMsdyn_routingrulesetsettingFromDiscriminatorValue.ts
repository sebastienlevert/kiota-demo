import {Msdyn_routingrulesetsetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_routingrulesetsettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_routingrulesetsetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_routingrulesetsetting();
}
