import {Msdyn_aiodimage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_aiodimageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_aiodimage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_aiodimage();
}
