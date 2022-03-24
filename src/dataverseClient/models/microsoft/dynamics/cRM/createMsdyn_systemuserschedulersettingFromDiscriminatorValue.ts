import {Msdyn_systemuserschedulersetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_systemuserschedulersettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_systemuserschedulersetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_systemuserschedulersetting();
}
