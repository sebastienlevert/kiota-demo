import {Msdyn_problematicasset} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_problematicassetFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_problematicasset {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_problematicasset();
}
