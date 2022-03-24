import {Msdyn_aiodlabel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_aiodlabelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_aiodlabel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_aiodlabel();
}
