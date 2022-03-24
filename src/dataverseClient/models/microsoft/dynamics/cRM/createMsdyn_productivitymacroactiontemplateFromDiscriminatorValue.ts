import {Msdyn_productivitymacroactiontemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_productivitymacroactiontemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_productivitymacroactiontemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_productivitymacroactiontemplate();
}
