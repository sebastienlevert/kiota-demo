import {Msdyn_functionallocation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_functionallocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_functionallocation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_functionallocation();
}
