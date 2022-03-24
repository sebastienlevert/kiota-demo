import {Msdyn_postconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_postconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_postconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_postconfig();
}
