import {Msdyn_productivityparameterdefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_productivityparameterdefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_productivityparameterdefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_productivityparameterdefinition();
}
