import {Msdyn_rtv} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_rtvFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_rtv {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_rtv();
}
