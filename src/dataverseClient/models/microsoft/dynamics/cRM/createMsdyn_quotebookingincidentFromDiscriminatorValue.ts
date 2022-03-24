import {Msdyn_quotebookingincident} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_quotebookingincidentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_quotebookingincident {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_quotebookingincident();
}
