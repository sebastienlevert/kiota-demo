import {Msdyn_smartassistconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_smartassistconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_smartassistconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_smartassistconfig();
}
