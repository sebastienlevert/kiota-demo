import {Msdyn_unifiedroutingdiagnostic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_unifiedroutingdiagnosticFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_unifiedroutingdiagnostic {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_unifiedroutingdiagnostic();
}
