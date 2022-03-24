import {Msdyn_liveworkitemevent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_liveworkitemeventFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_liveworkitemevent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_liveworkitemevent();
}
