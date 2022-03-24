import {Msdyn_ocliveworkitemsentiment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocliveworkitemsentimentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocliveworkitemsentiment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocliveworkitemsentiment();
}
