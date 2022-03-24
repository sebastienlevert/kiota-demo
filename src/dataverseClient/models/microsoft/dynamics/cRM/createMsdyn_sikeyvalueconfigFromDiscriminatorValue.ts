import {Msdyn_sikeyvalueconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_sikeyvalueconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_sikeyvalueconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_sikeyvalueconfig();
}
