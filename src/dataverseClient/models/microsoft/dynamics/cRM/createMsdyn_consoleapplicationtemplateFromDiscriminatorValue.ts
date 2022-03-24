import {Msdyn_consoleapplicationtemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_consoleapplicationtemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_consoleapplicationtemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_consoleapplicationtemplate();
}
