import {Msdyn_aiodtrainingimage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_aiodtrainingimageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_aiodtrainingimage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_aiodtrainingimage();
}
