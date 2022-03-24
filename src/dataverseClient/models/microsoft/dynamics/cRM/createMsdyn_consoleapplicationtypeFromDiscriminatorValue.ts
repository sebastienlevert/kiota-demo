import {Msdyn_consoleapplicationtype} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_consoleapplicationtypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_consoleapplicationtype {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_consoleapplicationtype();
}
