import {Msdyn_quotebookingservicetask} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_quotebookingservicetaskFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_quotebookingservicetask {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_quotebookingservicetask();
}
