import {Msdyn_overflowactionconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_overflowactionconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_overflowactionconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_overflowactionconfig();
}
