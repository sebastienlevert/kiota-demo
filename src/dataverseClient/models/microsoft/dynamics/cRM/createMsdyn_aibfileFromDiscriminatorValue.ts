import {Msdyn_aibfile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_aibfileFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_aibfile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_aibfile();
}
