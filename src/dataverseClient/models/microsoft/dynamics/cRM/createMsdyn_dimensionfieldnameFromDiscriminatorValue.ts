import {Msdyn_dimensionfieldname} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dimensionfieldnameFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dimensionfieldname {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dimensionfieldname();
}
