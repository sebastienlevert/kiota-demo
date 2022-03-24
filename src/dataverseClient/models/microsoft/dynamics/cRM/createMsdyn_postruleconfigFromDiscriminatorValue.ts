import {Msdyn_postruleconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_postruleconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_postruleconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_postruleconfig();
}
