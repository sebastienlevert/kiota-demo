import {Msdyn_flowcardtype} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_flowcardtypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_flowcardtype {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_flowcardtype();
}
