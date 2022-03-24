import {Msdyn_consoleapplicationsessiontemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_consoleapplicationsessiontemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_consoleapplicationsessiontemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_consoleapplicationsessiontemplate();
}
