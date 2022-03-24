import {Msdyn_playbookcategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_playbookcategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_playbookcategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_playbookcategory();
}
