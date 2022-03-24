import {Msdyn_tour} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_tourFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_tour {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_tour();
}
